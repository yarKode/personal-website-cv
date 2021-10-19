import React from "react";
import { Icon } from "@iconify/react";

export default function Skills() {
  return (
    <div className="skills-set">
      <div className="sep-skill-container">
        <h4>Key Skills</h4>

        <div className="sep-skill-list">
          <ul>
            <li className="sep-skill">
              <Icon icon="logos:html-5" width="1.6rem" height="1.6rem" />
              <p>HTML5</p>
            </li>
            <li className="sep-skill">
              <Icon icon="logos:css-3" width="1.6rem" height="1.6rem" />
              <p>CSS3</p>
            </li>
            <li className="sep-skill">
              <Icon icon="logos:javascript" width="1.6rem" height="1.6rem" />
              <p>JavaScript</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="sep-skill-container">
        <h4>FrameWorks</h4>

        <div className="sep-skill-list">
          <ul>
            <li className="sep-skill">
              <Icon
                icon="vscode-icons:file-type-reactjs"
                width="1.6rem"
                height="1.6rem"
              />
              <p>React</p>
            </li>
            <li className="sep-skill">
              <Icon
                icon="vscode-icons:file-type-reactjs"
                width="1.6rem"
                height="1.6rem"
              />
              <p>React Native</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="sep-skill-container">
        <h4>CSS Preprocessors</h4>

        <div className="sep-skill-list">
          <ul>
            <li className="sep-skill">
              <Icon
                icon="vscode-icons:file-type-scss2"
                width="1.6rem"
                height="1.6rem"
              />
              <p>SCSS</p>
            </li>
            <li className="sep-skill">
              <Icon
                icon="vscode-icons:file-type-less"
                width="1.6rem"
                height="1.6rem"
              />
              <p>LESS</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="sep-skill-container">
        <h4>Command Line</h4>

        <div className="sep-skill-list">
          <ul>
            <li className="sep-skill">
              <Icon
                icon="eos-icons:terminal-outlined"
                width="1.6rem"
                height="1.6rem"
              />
              <p>Terminal</p>
            </li>
            <li className="sep-skill">
              <Icon icon="simple-icons:iterm2" width="1.6rem" height="1.6rem" />
              <p>iTerm</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="sep-skill-container">
        <h4>Version Control</h4>

        <div className="sep-skill-list">
          <ul>
            <li className="sep-skill">
              <Icon icon="bx:bx-git-branch" width="1.6rem" height="1.6rem" />
              <p>Git</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="sep-skill-container">
        <h4>Package managers</h4>

        <div className="sep-skill-list">
          <ul>
            <li className="sep-skill">
              <Icon icon="logos:npm" width="1.6rem" height="1.6rem" />
              <p>npm</p>
            </li>
            <li className="sep-skill">
              <Icon icon="logos:yarn" width="1.6rem" height="1.6rem" />
              <p>yarn</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="sep-skill-container">
        <h4>Additional tools</h4>

        <div className="sep-skill-list">
          <ul>
            <li className="sep-skill">
              <Icon
                icon="vscode-icons:file-type-vscode"
                width="1.6rem"
                height="1.6rem"
              />
              <p>VSCode</p>
            </li>
            <li className="sep-skill">
              <Icon icon="fontisto:jira" width="1.6rem" height="1.6rem" />
              <p>Jira</p>
            </li>
            <li className="sep-skill">
              <Icon icon="logos:figma" width="1.6rem" height="1.6rem" />
              <p>Figma</p>
            </li>
            <li className="sep-skill">
              <Icon icon="grommet-icons:slack" width="1.6rem" height="1.6rem" />
              <p>Slack</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
