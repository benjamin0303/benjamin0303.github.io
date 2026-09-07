# Run with: bundle exec ruby test/local_styles_cache.rb
require "liquid"
require "tmpdir"
require "fileutils"
require_relative "../_plugins/local_styles_cache"

class ThemeStylesCache
  def bust_css_cache(file_name)
    "#{file_name}?v=theme-version"
  end
end

class SiteStylesCache < ThemeStylesCache
  include LocalStylesCache

  def initialize(source)
    @context = Liquid::Context.new({}, {}, { site: Struct.new(:source).new(source) })
  end
end

Dir.mktmpdir("local-styles-cache-") do |source|
  FileUtils.mkdir_p(["#{source}/_sass", "#{source}/assets/css"])
  partial = "#{source}/_sass/_personal.scss"
  entrypoint = "#{source}/assets/css/main.scss"
  File.write(partial, ".profile-flip { width: 220px; }")
  File.write(entrypoint, '@import "personal";')
  filter = SiteStylesCache.new(source)
  css_url = "/assets/css/main.css"
  initial = filter.bust_css_cache(css_url)
  abort "URL or hash format changed" unless initial.match?(%r{\A/assets/css/main\.css\?v=[a-f0-9]{64}\z})
  abort "cache version is not deterministic" unless initial == filter.bust_css_cache(css_url)
  File.write(partial, ".profile-flip { width: 200px; }")
  changed = filter.bust_css_cache(css_url)
  abort "local Sass change did not invalidate cache" if initial == changed
  File.write(entrypoint, '@import "personal"; /* updated */')
  abort "entrypoint change did not invalidate cache" if changed == filter.bust_css_cache(css_url)
end

puts "Local Sass cache checks passed"
