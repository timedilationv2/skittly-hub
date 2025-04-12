# Solutions and Proposed Implementations

This document outlines actionable solutions addressing the identified concerns in our working flow. It is meant to work in tandem with related documents, such as our [Working Flow Concerns](WorkingFlowConcerns) and [Roadmap](https://github.com/timedilationv2/skittly/wiki/Roadmap).

---

## 1. Project Structure & Organization

**Concerns Addressed:**
- Mixing frontend and backend code
- Lack of modularization

**Solutions:**
- **Separate Directories:**  
  • Create dedicated directories, e.g., `/frontend` for React code and `/backend` for API or server code.  
  • Update your README and Wiki to reflect the new structure.
  
- **Modularization:**  
  • Organize reusable components, helper functions, and APIs into their own modules (e.g., `/frontend/components`, `/frontend/utils`).
  • Use consistent naming conventions.

---

## 2. Code Quality & Consistency

**Concerns Addressed:**
- Inconsistent formatting and potential errors

**Solutions:**
- **Linting & Formatting:**  
  • Integrate ESLint and Prettier by installing the following dev dependencies:
  ```bash
  npm install --save-dev eslint prettier eslint-config-prettier eslint-plugin-prettier
