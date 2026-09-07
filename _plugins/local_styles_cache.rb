# The theme fingerprints its own Sass but misses this site's local overrides.
# Include local Sass in the version so browsers refresh main.css after changes.
require "digest"

module LocalStylesCache
  def bust_css_cache(file_name)
    versioned = super
    digest = Digest::SHA256.new.update(versioned)
    source = @context.registers[:site].source
    Dir.glob(["_sass/**/*.scss", "assets/css/**/*.scss"], base: source).sort.each do |path|
      digest.update(path).update(File.binread(File.join(source, path)))
    end
    "#{file_name}?v=#{digest.hexdigest}"
  end
end

Liquid::Template.register_filter(LocalStylesCache)
