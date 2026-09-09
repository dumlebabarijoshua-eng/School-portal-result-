import {PrismaClient,Role} from "@prisma/client"; import bcrypt from "bcryptjs";
const db=new PrismaClient(); const hash=await bcrypt.hash("ChangeMe123!",12);
async function main(){
 const admin=await db.user.upsert({where:{username:"admin"},update:{},create:{username:"admin",email:"admin@school.edu.ng",passwordHash:hash,role:Role.ADMIN}});
 const dept=await db.department.upsert({where:{code:"SCI"},update:{},create:{name:"Science Department",code:"SCI"}});
 const cls=await db.class.upsert({where:{name_level:{name:"SS 3 Science",level:"SS3"}},update:{},create:{name:"SS 3 Science",level:"SS3",departmentId:dept.id}});
 const session=await db.academicSession.upsert({where:{name:"2026/2027"},update:{},create:{name:"2026/2027",startDate:new Date("2026-09-01"),endDate:new Date("2027-07-31"),active:true}});
 const term=await db.term.upsert({where:{name_academicSessionId:{name:"First Term",academicSessionId:session.id}},update:{},create:{name:"First Term",academicSessionId:session.id}});
 for(const [grade,min,max,point,remark] of [["A",70,100,4,"Excellent"],["B",60,69.99,3,"Very Good"],["C",50,59.99,2,"Good"],["D",45,49.99,1,"Pass"],["F",0,44.99,0,"Fail"]] as const) await db.gradingScale.upsert({where:{name:"Default-"+grade},update:{},create:{name:"Default-"+grade,minScore:min,maxScore:max,grade,point,remark}});
 await db.schoolSettings.upsert({where:{id:"school-settings"},update:{},create:{id:"school-settings",schoolName:"Unity College",shortName:"UC",motto:"Knowledge, Character and Service",mode:"SECONDARY"}});
 for(const [code,name] of [["MAT101","Mathematics"],["ENG101","English Language"],["PHY101","Physics"]]) await db.subject.upsert({where:{code},update:{},create:{code,name,level:"SS3",departmentId:dept.id}});
 const su=await db.user.upsert({where:{username:"STU001"},update:{},create:{username:"STU001",passwordHash:hash,role:Role.STUDENT}});
 await db.student.upsert({where:{userId:su.id},update:{},create:{userId:su.id,matricNumber:"STU001",admissionNumber:"ADM001",firstName:"Demo",lastName:"Student",level:"SS3",classId:cls.id,departmentId:dept.id}});
 const tu=await db.user.upsert({where:{username:"TCH001"},update:{},create:{username:"TCH001",passwordHash:hash,role:Role.TEACHER}});
 await db.teacher.upsert({where:{userId:tu.id},update:{},create:{userId:tu.id,staffId:"TCH001",firstName:"Demo",lastName:"Teacher",departmentId:dept.id}});
 console.log("Seeded admin/admin, student STU001, teacher TCH001. Password: ChangeMe123!");
} main().finally(()=>db.$disconnect());
