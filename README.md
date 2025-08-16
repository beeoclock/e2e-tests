# End-to-End Tests

This repository contains **E2E tests** for the BeeOClock platform using [Cypress](https://www.cypress.io/).

---

## Requirements

- Node.js ≥ 20  
- npm ≥ 9 or yarn ≥ 1  
- Cypress ≥ 13.6.0 

---

## Installation

```bash
git clone https://github.com/beeoclock/e2e-tests.git
cd e2e-tests
npm install
```

---

## Open runner
1. in case to run locally it's demand to get '.env' file in source repository root.
(contact with QA for it)
2. install dependencies (npm install | npm ci) 
```bash
npx cypress open
```
1. select E2E-testing
2. select browser (edge recommended to have, but electron is acceptable)
3. click start E2E testing button

---

## running tests locally 
repository have 4 testing module -> cypress\e2e:
1. backend -> constains API tests
2. biz-landing -> contains UI tests of biz.landing page
3. panel -> contains UI tests of CRM page (client panel app) 
4. service -> contains UI tests of client app page

---

## github actions 
no need to clone, install dependencies, repository allow to run tests via github-actions: 
1. visit: [E2E-actions](https://github.com/beeoclock/e2e-tests/actions).
2. select intersting tests package/name
3. click run workflow -> (default on branch main) -> run workflow
4. wait for test end with result

--- 
## if any questions/problems contanct with QA team
