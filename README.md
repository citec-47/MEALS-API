# curriculum-tools-copy-projects

The bash script stored in this repo will help you to quickly copy [GitHub project boards](https://docs.github.com/en/github/managing-your-work-on-github/about-project-boards) with associated issues.
It will be useful for the Microverse group projects that should be based on project board templates prepared by Microverse.


## Getting Started

In order to successfully copy a given project board, you need to follow the below steps.

### Prerequisites

1. Initialize an empty repository for your group project.

2. Manually [copy project board (only empty columns)](https://docs.github.com/en/github/managing-your-work-on-github/copying-a-project-board) from a specific template to your own repo. **IMPORTANT NOTE: do not copy cards manually, this tool will do it for you in a few seconds.**
    - [[TEMPLATE] JavaScript Group Capstone](https://github.com/microverseinc/curriculum-javascript/projects/1)
    - [[TEMPLATE] React Group Project](https://github.com/microverseinc/curriculum-react-redux/projects/1)
    - [[TEMPLATE] Ruby Group Capstone Project](https://github.com/microverseinc/curriculum-ruby/projects/1)

3. Install [jq](https://stedolan.github.io/jq/download/).
    - OS X
    ``` bash
        brew install jq
    ```
     - Linux
    ``` bash
        sudo apt-get install jq
    ```
     - Windows - **run your windows CMD as an administrator**
          ``` bash
              choco install jq
          ```
          - if you do not have chocolately installed follow [this guide](https://www.liquidweb.com/kb/how-to-install-chocolatey-on-windows/)
          - thanks to courtesy of [Lucas Erkana](https://github.com/Lucash2022) you can see how the whole process should look like on Windows [in this video](https://www.loom.com/share/8cd5e493f0ca4a9ab90989e2ca1ceb3c)

4. Generate [personal access token for GitHub API](https://github.com/settings/tokens/new?scopes=repo).

### Usage

1. Clone this repository.
2. Open terminal.
3. Navigate to the cloned repo dir.
     ``` bash
         cd curriculum-tools-copy-projects
     ```
4. Run script with correct input parameters
     ``` bash
         sh copy_github_board.sh <YOUR_GITHUB_AUTH_TOKEN> <SOURCE_GITHUB_USERNAME> <SOURCE_REPO_NAME> <YOUR_GITHUB_USERNAME> <YOUR_GROUP_PROJECT_REPO_NAME> 
     ```
     
     🐛 _In case of errors, try to use:_
     ``` bash
         bash copy_github_board.sh <YOUR_GITHUB_AUTH_TOKEN> <SOURCE_GITHUB_USERNAME> <SOURCE_REPO_NAME> <YOUR_GITHUB_USERNAME> <YOUR_GROUP_PROJECT_REPO_NAME> 
     ```
     
    - for example, in case of the JavaScript Group Capstone, you should use:

     ``` bash
         sh copy_github_board.sh <YOUR_GITHUB_AUTH_TOKEN> microverseinc curriculum-javascript <YOUR_GITHUB_USERNAME> <YOUR_GROUP_PROJECT_REPO_NAME> 
     ```
5. Verify that the template project board and your board look exactly the same.

### Troubleshooting

When trying to use the .sh file to copy the kanban board to your repository, youmight see unexpected errors appeared such as this one:

```bash
jq: error (at :4): Cannot index string with string "id"
```

To fix it locally you need to createa new personal access token with permission to access and manage your repositories.


## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](../../issues/).

## Show your support

Give a ⭐️ if you like this project!

## Acknowledgments

This script is based on the [How to copy project cards on GitHub](https://blog.termian.dev/posts/project-cards-copy-github/) by Damian Terlecki.
