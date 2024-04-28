#!/bin/sh

SESSION_NAME="resume"

tmux new -s $SESSION_NAME -d

bind -T copy-mode-vi MouseDragEnd1Pane send-keys -X copy-pipe-and-cancel "xclip -i -f -selection primary | xclip -i -selection clipboard"

tmux split-window -h

tmux select-pane -t 0
tmux split-window -v

tmux select-pane -t 0
tmux send-keys "npm run dev" C-m

tmux select-pane -t 2
tmux send-keys "nvim" C-m

tmux attach -t $SESSION_NAME
