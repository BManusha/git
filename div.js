    creted

user@DESKTOP-QVSS2OV MINGW64 ~/desktop/lakshana/git (sigup)
$ git log --onelie
fatal: unrecognized argument: --onelie

user@DESKTOP-QVSS2OV MINGW64 ~/desktop/lakshana/git (sigup)
$ git log --oneline
3c6762d (HEAD -> sigup) sigup
bfd68f7 (origin/master, master) creted

user@DESKTOP-QVSS2OV MINGW64 ~/desktop/lakshana/git (sigup)
$ git log
commit 3c6762d051d5e0d1ec51009df644604417868fdd (HEAD -> sigup)
Author: manuhsareddy <manuhsa11reddy@gmail.com>
Date:   Mon Aug 22 08:27:47 2022 +0530

    sigup

commit bfd68f79f4fdd136cef80c1fe3f145b34eeb2ea3 (origin/master, master)
Author: manuhsareddy <manuhsa11reddy@gmail.com>
Date:   Mon Aug 22 07:43:09 2022 +0530

    creted

user@DESKTOP-QVSS2OV MINGW64 ~/desktop/lakshana/git (sigup)
$ git push origin sigup
Enumerating objects: 4, done.
Counting objects: 100% (4/4), done.
Delta compression using up to 4 threads
Compressing objects: 100% (3/3), done.
Writing objects: 100% (3/3), 488 bytes | 488.00 KiB/s, done.
Total 3 (delta 0), reused 0 (delta 0), pack-reused 0
remote:
remote: Create a pull request for 'sigup' on GitHub by visiting:
remote:      https://github.com/BManusha/git/pull/new/sigup
remote:
To https://github.com/BManusha/git.git
 * [new branch]      sigup -> sigup

user@DESKTOP-QVSS2OV MINGW64 ~/desktop/lakshana/git (sigup)
$ git checkout master
Switched to branch 'master'

user@DESKTOP-QVSS2OV MINGW64 ~/desktop/lakshana/git (master)
$ notepad login.txt

user@DESKTOP-QVSS2OV MINGW64 ~/desktop/lakshana/git (master)
$ git branch login

user@DESKTOP-QVSS2OV MINGW64 ~/desktop/lakshana/git (master)
$ git checkout login
Switched to branch 'login'

user@DESKTOP-QVSS2OV MINGW64 ~/desktop/lakshana/git (login)
$ notepad login.txt

user@DESKTOP-QVSS2OV MINGW64 ~/desktop/lakshana/git (login)
$ git add login.txt

user@DESKTOP-QVSS2OV MINGW64 ~/desktop/lakshana/git (login)
$ git status
On branch login
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        new file:   login.txt


user@DESKTOP-QVSS2OV MINGW64 ~/desktop/lakshana/git (login)
$ git commit -m "login"
[login 912aae2] login
 1 file changed, 111 insertions(+)
 create mode 100644 login.txt

user@DESKTOP-QVSS2OV MINGW64 ~/desktop/lakshana/git (login)
$ git status
On branch login
nothing to commit, working tree clean

user@DESKTOP-QVSS2OV MINGW64 ~/desktop/lakshana/git (login)
$ git push origin login
Enumerating objects: 4, done.
Counting objects: 100% (4/4), done.
Delta compression using up to 4 threads
Compressing objects: 100% (3/3), done.
Writing objects: 100% (3/3), 1.13 KiB | 1.13 MiB/s, done.
Total 3 (delta 0), reused 0 (delta 0), pack-reused 0
remote:
remote: Create a pull request for 'login' on GitHub by visiting:
remote:      https://github.com/BManusha/git/pull/new/login
remote:
To https://github.com/BManusha/git.git
 * [new branch]      login -> login

user@DESKTOP-QVSS2OV MINGW64 ~/desktop/lakshana/git (login)
$ git status
On branch login
nothing to commit, working tree clean

user@DESKTOP-QVSS2OV MINGW64 ~/desktop/lakshana/git (login)
$ git log
commit 912aae25131df618f767c5afecd91f421991a235 (HEAD -> login, origin/login)
Author: manuhsareddy <manuhsa11reddy@gmail.com>
Date:   Mon Aug 22 08:31:50 2022 +0530

    login

commit bfd68f79f4fdd136cef80c1fe3f145b34eeb2ea3 (origin/master, master)
Author: manuhsareddy <manuhsa11reddy@gmail.com>
Date:   Mon Aug 22 07:43:09 2022 +0530

    creted

user@DESKTOP-QVSS2OV MINGW64 ~/desktop/lakshana/git (login)
$ git checkout master
Switched to branch 'master'

user@DESKTOP-QVSS2OV MINGW64 ~/desktop/lakshana/git (master)
$ git branch logout

user@DESKTOP-QVSS2OV MINGW64 ~/desktop/lakshana/git (master)
$ git checkout logout
Switched to branch 'logout'

user@DESKTOP-QVSS2OV MINGW64 ~/desktop/lakshana/git (logout)
$ notepad logout.txt

user@DESKTOP-QVSS2OV MINGW64 ~/desktop/lakshana/git (logout)
$ git status
On branch logout
Untracked files:
  (use "git add <file>..." to include in what will be committed)
        logout.txt

nothing added to commit but untracked files present (use "git add" to track)

user@DESKTOP-QVSS2OV MINGW64 ~/desktop/lakshana/git (logout)
$ git add logout
fatal: pathspec 'logout' did not match any files

user@DESKTOP-QVSS2OV MINGW64 ~/desktop/lakshana/git (logout)
$ git add logout.txt

user@DESKTOP-QVSS2OV MINGW64 ~/desktop/lakshana/git (logout)
$ git commit -m "logout"
[logout 3939f6b] logout
 1 file changed, 65 insertions(+)
 create mode 100644 logout.txt

user@DESKTOP-QVSS2OV MINGW64 ~/desktop/lakshana/git (logout)
$ git status
On branch logout
nothing to commit, working tree clean

user@DESKTOP-QVSS2OV MINGW64 ~/desktop/lakshana/git (logout)
$ git log
commit 3939f6b8d98b28520d9d161a534de03098a8c0a3 (HEAD -> logout)
Author: manuhsareddy <manuhsa11reddy@gmail.com>
Date:   Mon Aug 22 08:34:46 2022 +0530

    logout

commit bfd68f79f4fdd136cef80c1fe3f145b34eeb2ea3 (origin/master, master)
Author: manuhsareddy <manuhsa11reddy@gmail.com>
Date:   Mon Aug 22 07:43:09 2022 +0530

    creted

user@DESKTOP-QVSS2OV MINGW64 ~/desktop/lakshana/git (logout)
$ git push origin logout
Enumerating objects: 4, done.
Counting objects: 100% (4/4), done.
Delta compression using up to 4 threads
Compressing objects: 100% (3/3), done.
Writing objects: 100% (3/3), 975 bytes | 975.00 KiB/s, done.
Total 3 (delta 0), reused 0 (delta 0), pack-reused 0
remote:
remote: Create a pull request for 'logout' on GitHub by visiting:
remote:      https://github.com/BManusha/git/pull/new/logout
remote:
To https://github.com/BManusha/git.git
 * [new branch]      logout -> logout

user@DESKTOP-QVSS2OV MINGW64 ~/desktop/lakshana/git (logout)
$ git log
commit 3939f6b8d98b28520d9d161a534de03098a8c0a3 (HEAD -> logout, origin/logout)
Author: manuhsareddy <manuhsa11reddy@gmail.com>
Date:   Mon Aug 22 08:34:46 2022 +0530

    logout

commit bfd68f79f4fdd136cef80c1fe3f145b34eeb2ea3 (origin/master, master)
Author: manuhsareddy <manuhsa11reddy@gmail.com>
Date:   Mon Aug 22 07:43:09 2022 +0530

    creted

user@DESKTOP-QVSS2OV MINGW64 ~/desktop/lakshana/git (logout)
$ git checkout master
Switched to branch 'master'

user@DESKTOP-QVSS2OV MINGW64 ~/desktop/lakshana/git (master)
$ git branch division

user@DESKTOP-QVSS2OV MINGW64 ~/desktop/lakshana/git (master)
$ git checkout division
Switched to branch 'division'
