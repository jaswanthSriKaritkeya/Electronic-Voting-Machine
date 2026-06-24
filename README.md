# Voting Machine (Frontend)

A simple front-end Voting Machine demo demonstrating an EVM (Electronic Voting Machine) and VVPAT (Voter Verified Paper Audit Trail) style interface. Built with plain HTML, CSS and JavaScript.

**Features**

- **EVM-style voting interface:** three party buttons plus NOTA presented as selectable candidates. The candidate buttons are disabled by default and only enabled when a voter opens the ballot.
- **Ballot control:** clicking the `Ballot` button opens voting (enables the vote buttons). Clicking `Cancel` closes voting (disables the vote buttons) and aborts the current ballot.
- **Single vote per ballot:** once a vote is cast, voting is immediately closed and the vote buttons are disabled so each voter can only cast one vote per ballot.
- **False-voter protection:** the `Cancel` action allows an operator to cancel the ballot if a suspicious/invalid voter appears, preventing any vote from being recorded.
- **Simple VVPAT display:** a vote counter is shown in the VVPAT panel to reflect the recorded vote (simulating a paper trail/verification area).

**How it works (behavior)**

- On page load the candidate `Vote` buttons are disabled.
- Clicking `Ballot` sets the system to "voting open" and enables the candidate buttons so a voter may vote.
- When a candidate `Vote` button is clicked while voting is open:
  - The vote counter increments by 1.
  - Voting is immediately closed and all candidate buttons are disabled again (enforcing one vote per voter).
- Clicking `Cancel` at any time disables the candidate buttons and sets voting to closed without incrementing the counter (useful to reject false voters).

**Files**

- `index.html` — markup for the EVM + VVPAT interface.
- `style.css` — styles for layout and presentation.
- `script.js` — voting logic: enabling/disabling buttons, counting votes, ballot/cancel behavior.

**Usage**

1. Open `index.html` in a browser (double-click or serve with a static file server).
2. Click `Ballot` to open voting for a single voter.
3. Voter clicks the desired `Vote` button — the counter increments and voting locks.
4. If needed, click `Cancel` before a vote is cast to abort that ballot.

**Customize**

- Add/remove candidate blocks in `index.html` to change parties.
- Modify styles in `style.css` to adapt visuals.
- Adjust `script.js` to add more advanced features (per-candidate tallies, persistent storage, multi-voter sessions).

**Notes & Limitations**

- This is a demo front-end only — it does not store votes persistently or authenticate voters.
- For production-grade voting, add secure authentication, tamper-evident audit logs, server-side tallying, and legal compliance checks.

---

If you'd like, I can: add per-candidate counters, persist votes to `localStorage`, or implement a small admin panel to reset counts. Want one of those next?
