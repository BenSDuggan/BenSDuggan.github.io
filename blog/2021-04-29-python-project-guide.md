---
layout: post
title:  "Python project development guide"
date:   2021-04-29 14:00:02 -0500
categories: python development
---

After creating [DAPT](https://github.com/BenSDuggan/DAPT) and some other Python packages, here are my steps to creating a Python package.

## 1. Create repository and project structure

The goal is to make a repository that has this structure:

```
.
├── [project-name]                  # A folder with the name of the Python package being created
├── docs                            # Folder that will hold the documentation
├── examples                        # Folder with the examples
├── tests                           # Unit test folder
├── .gitignore                      # Files and folders to ignore
├── LICENSE                         # Project license
├── README.md                       # README for the project
└── setup.py                        # Setup file for PyPI
```

1. Make a [GitHub](hhttps://github.com/new) repository for the project.
2. To make the folders run `mkdir docs examples tests [project-name]`.
3. The files can be created by running `touch .gitignore LICENSE README.md`.

## 2. Setup package

***TODO:***

## 3. Setup documentation

***TODO:***

## 4. Setup unit tests

It is a good idea to implement unit tests early into development.  [pytest](https://docs.pytest.org/en/6.2.x/) is a great unit testing frame work to use.  It can be installed by running `pip install pytest`.  To use pytest, create a file that begins with "test_*.py" or ends with "*_test.py".  In your Python file, add `import pytest` to the top of the module.  To create a simple test, you need to create a method with the name `def test_*:` or `def *_test:`.  The last line of your function should have an `assert` with your expected result and actual result.  For example, this is a basic test of some built in Python math function.  This module would be placed in a file named "test_math.py".  

```
import pytest

def test_min:
    assert min(1,3) == 1

def test_max:
    assert max(1,3) == 3
```

This test can then be ran by running `pytest` or `pytest test_math.py` in the terminal.  The former command will run python file matching the naming scheme above.  The latter method will only run the specified module.

***TODO:*** Config options  

***TODO:*** Classes

## 5. Setup .gitignore

For my `.gitignore` file I use this basic template:

```
# Python stuff
.pytest_cache
__pycache__
*.pyc

# pip stuff
dapt.egg-info/*
dist/*

# Dev env stuff
.vscode
.DS_Store

# Unwanted files

```

## 6. Pick a license

A great place to pick a license is <https://choosealicense.com/>.  For most projects I use the [MIT](https://github.com/licenses/license-templates/blob/master/templates/mit.txt) license which allows people to do pretty much anything wth your code and they must give you credit.  The [BSD-3](https://github.com/licenses/license-templates/blob/master/templates/bsd3.txt) licence is also good as it doesn't allow your name to be used as an endorsement for derived projects.
