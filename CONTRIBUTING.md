Contributing to BANKI

Please take a moment to review this document in order to make the contribution process easy and effective for everyone involved.
Pull requests

    Fork the project, clone your fork, and configure the remotes:

    # Clone your fork of the repo into the current directory
    git clone https://github.com/<your-username>/BANKI.git
    # Navigate to the newly cloned directory
    cd BANKI
    # Assign the original repo to a remote called "upstream"
    git remote add upstream https://github.com/curtisbarnard/BANKI.git

    If you cloned a while ago, get the latest changes from upstream:

    git checkout main
    git pull upstream main

    Create a new topic branch (off the main project development branch) to contain your feature, change, or fix:

    git checkout -b <topic-branch-name>

    Locally merge (or rebase) the upstream development branch into your topic branch:

    git pull [--rebase] upstream main

    Push your topic branch up to your fork:

    git push origin <topic-branch-name>

    Open a Pull Request with a clear title and description.
