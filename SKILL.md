---
name: create-skill-for-repo
user-invocable: true
description: 'WORKFLOW SKILL — Draft a repository-scoped SKILL.md template and iterate with the developer to finalize agent customization. Use this when you want to package a repeatable workflow as a skill.'
---

# Create SKILL.md (Draft)

## Purpose
Create a reusable `SKILL.md` for this repository that documents a repeatable workflow, decision points, and example prompts so contributors can invoke the workflow via the agent.

## When to Use
- Creating or updating project-scoped automation and best-practice workflows
- Packaging multi-step developer tasks (review, release checklist, migration)

## Step-by-step Process
1. Determine scope: workspace (team) vs user (personal).
2. Decide primitive: Skill vs Instruction vs Prompt vs Agent.
3. Draft frontmatter with `name`, `user-invocable`, and `description`.
4. Write the workflow: steps, decision points, quality checks.
5. Add examples: sample prompts and expected outputs.
6. Save to `.github/skills/<name>/SKILL.md` or repo root based on scope.
7. Validate YAML frontmatter and description keywords.

## Decision Points
- Outcome type: documentation-only vs automated file edits.
- Scope: `.github/` for team-shared vs `{{VSCODE_USER_PROMPTS_FOLDER}}/` for user.
- Granularity: single-purpose prompt vs multi-step skill.

## Quality Criteria
- Clear `description` with trigger keywords.
- YAML frontmatter present and valid.
- Example prompts included (3+) and realistic.
- Explicit file location recommendation.

## Examples (try these)
- "Create a SKILL.md to automate: run tests, bump version, create changelog"
- "Draft a repo-level skill to standardize PR checklist for frontend"

## Clarifying Questions (please answer)
1. Do you want this SKILL to be workspace-scoped (team) or user-scoped (personal)?
2. Should the skill be a short checklist (single-run) or a full multi-step workflow with validation and fixes?
3. Any specific example prompts or task names you want included?

## Next steps
- Answer the clarifying questions above and I will finalize the SKILL.md (move to `.github/skills/` if workspace-scoped).
- Optionally, tell me an example workflow to encode; I'll add prompts and frontmatter accordingly.
