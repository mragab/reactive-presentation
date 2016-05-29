# Setup

    brew install python

    brew install ruby

    echo "gem: --user-install -n~/bin" >> $HOME/.gemrc

    gem install http_parser livereload asciidoctor tilt thread_safe haml guard guard-shell guard-livereload slim pygments.rb

# Run once

    asciidoctor -T asciidoctor-deck.js/templates/haml/ reactive.adoc

    asciidoctor -T asciidoctor-reveal.js/templates/slim/ reactive.adoc

# Run loop

    guard start

# Edit source

edit reactive.adoc

# View presentation

open reactive.html

# Notes on syntax highlighting

1. The best code highlighter is pygments
2. Callouts look really bad, don't use them
3. Don't try to use [%step] with code blocks, it trashes code highlighting
4. To list the available styles `$(dirname $(gem which pygments.rb))/../vendor/pygments-main/pygmentize -L styles`

# Switching backends

The following would be needed assuming the backend code and templates are already there, which is currently the case for deckjs and revealjs:

1. The guard file: comment/uncomment the corresponding line
2. reactive.adoc: comment/uncomment the line specifying the backend
3. In case running once from command line, specify the template location corresponding to the currently configured backend
