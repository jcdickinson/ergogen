default_board := "keeb"

alias b := build

build board=default_board:
  node src/cli.js input/{{board}}.yaml -o output
