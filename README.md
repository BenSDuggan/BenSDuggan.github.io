# BenSDuggan.github.io

My personal website.

Original theme [Alembic](https://github.com/daviddarnes/alembic)

## Install

1. Jekyll
	1. `sudo apt-get install ruby-full build-essential zlib1g-dev`
	2. `echo '# Install Ruby Gems to ~/gems' >> ~/.bashrc`
	3. `echo 'export GEM_HOME="$HOME/gems"' >> ~/.bashrc`
	4. `echo 'export PATH="$HOME/gems/bin:$PATH"' >> ~/.bashrc`
	5. `source ~/.bashrc`
2. Package Gems
	1. If you need to update packages first remove the `Gemfile.lock`.
	2. Inside this repo, run `bundle install`.

## Run

`bundle exec jekyll serve`