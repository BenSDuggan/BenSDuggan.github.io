# BenSDuggan.github.io

My personal website.

Original theme [Alembic](https://github.com/daviddarnes/alembic)

## Install

### Linux

1. Jekyll
	1. `sudo apt-get install ruby-full build-essential zlib1g-dev`
	2. `echo '# Install Ruby Gems to ~/gems' >> ~/.bashrc`
	3. `echo 'export GEM_HOME="$HOME/gems"' >> ~/.bashrc`
	4. `echo 'export PATH="$HOME/gems/bin:$PATH"' >> ~/.bashrc`
	5. `source ~/.bashrc`
2. Package Gems
	1. If you need to update packages first remove the `Gemfile.lock`.
	2. Inside this repo, run `bundle install`.

### Mac

1. Jekyll
	1. `brew install ruby`
	2. `echo 'export PATH="/usr/local/opt/ruby/bin:$PATH"' >> ~/.bash_profile`
	3. `gem install --user-install bundler jekyll`
2. Package Gems
	1. If you need to update packages first remove the `Gemfile.lock`.
	2. Inside this repo, run `bundle install`.

## Run

`bundle install`
`bundle exec jekyll serve`

## Update

To update a specific package (e.g. for security vulnerability), run `bundle update <package name>`.  For example, to update `activesupport` run `bundle update activesupport`.
