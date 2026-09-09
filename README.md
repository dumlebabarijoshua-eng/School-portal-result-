# Complete School Result Portal

A production-oriented Next.js/PostgreSQL/Prisma starter with:
- Student, Teacher and Admin roles
- Secure password hashing
- Server-side role checks
- Student dashboard/history/profile
- Teacher assignments dashboard
- Admin dashboards and management views
- PostgreSQL schema for sessions, terms, departments, classes, subjects, assignments and results
- Result grading
- Draft/submitted/approved/published workflow fields
- Result entry API with teacher assignment authorization
- Publishing API restricted to admins
- Responsive UI
- Standalone deployment output

## Run
1. Install Node.js and PostgreSQL.
2. Copy `.env.example` to `.env`.
3. Set `DATABASE_URL`.
4. `npm install`
5. `npx prisma generate`
6. `npm run db:push`
7. `npm run db:seed`
8. `npm run dev`

Demo:
admin / ChangeMe123!
STU001 / ChangeMe123!
TCH001 / ChangeMe123!

Change demo credentials before production.

## Production
Use a managed PostgreSQL provider, set a strong AUTH_SECRET, configure HTTPS, add rate limiting and a persistent session/token strategy, and review upload/PDF handling before accepting real student records. Prisma's current Next.js documentation recommends current Node/Prisma versions and PostgreSQL deployment patterns.
