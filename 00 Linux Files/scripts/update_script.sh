#!/bin/bash
set -e -u

#* Update All
red=$(tput setaf 1)
green=$(tput setaf 2)
yellow=$(tput setaf 3)
cyan=$(tput setaf 6)
nocolor=$(tput sgr0) # normal - no color + no bold
bold=$(tput bold)

do_action() {
    step=$1
    shift
    description=$1
    shift
    printf "${green}Step %s: %s\n" "$step" "$description"
    printf "${yellow}"
    printf '%q ' "$@"
    printf "${nocolor}\n"

    if "$@"; then
        printf "${green}Step %s: SUCCESS${nocolor}\n" "$step"
    else
        err=$?
        printf "${red}Step %s: FAILED${nocolor}\n" "$step" >&2
        #        exit $err
        sleep 2
    fi
}

i=0
do_action $((++i)) "configure packages" dpkg --configure -a
do_action $((++i)) "fix broken dependencies" apt-get install --fix-broken
do_action $((++i)) "update cache" apt-get update
do_action $((++i)) "upgrade packages" apt-get upgrade
do_action $((++i)) "upgrade distribution" apt-get dist-upgrade
do_action $((++i)) "remove unused packages" apt-get --purge autoremove
do_action $((++i)) "clean" apt-get clean
do_action $((++i)) "clean up" apt-get autoclean

sleep 1
do_action $((++i)) "snap refresh" snap refresh

sleep 1
do_action $((++i)) "flatpak update" flatpak update

sleep 2
do_action $((++i)) "flatpak uninstall --unused" flatpak uninstall --unused

#* Removes old revisions of snaps
# CLOSE ALL SNAPS BEFORE RUNNING THIS
echo ""
echo "${bold}${cyan}Waiting...${nocolor}"
sleep 5
snap list --all | awk '/disabled/{print $1, $3}' |
    while read snapname revision; do
        snap remove "$snapname" --revision="$revision"
    done

sleep 1
echo ""
echo "${bold}${green}The script has done its job${nocolor}"
echo ""

# According to: https://codereview.stackexchange.com/questions/146949/simple-linux-upgrade-script-in-bash-revision-2
# According to: https://askubuntu.com/questions/1182450/what-does-2-mean-in-a-shell-script
# According to: https://unix.stackexchange.com/questions/58310/difference-between-printf-and-echo-in-bash
# Removes old revisions of snaps -> taken from: https://www.linuxuprising.com/2019/04/how-to-remove-old-snap-versions-to-free.html
