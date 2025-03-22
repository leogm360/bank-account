# Bank Account

An example of event sourcing bank-account backend.

## 1. Get Started

To get started, you need to have the follow the steps below:

### 1.1 Configure the environment

Create a `.env` file in the root of the project and copy the content of the `.env.example` file to it. They are as fallows:

**📋 Table 1 - prefixes**
| Prefix  | Description                         |
| ------- | ----------------------------------- |
| `CMD`   | The environment of the application. |
| `QUERY` | The port that the server will run.  |

---

**📋 Table 2 - variables**
| Varibles   | Description                         | Requirement |
| ---------- | ----------------------------------- | ----------- |
| `NODE_ENV` | The environment of the application. | Required    |
| `PORT`     | The port that the server will run.  | Required    |


### 1.2 Install the dependencies

This project needs to have the following dependencies installed:

- Node.js, version >=22;
- Pnpm, version >=10;
- Docker, version >=20;
- Docker Compose, version >=2.

To install the dependencies, run `pnpm install`.

### 1.3 Run the project

There are some useful scripts that you can use to run the project.

- To start/stop the project in dev mode:
  - run `pnpm run docker:dev:up` to start;
  - run `pnpm run docker:dev:down` to stop.
