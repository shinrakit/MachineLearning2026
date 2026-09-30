# Thai Machine Learning 225371[3]

เว็บไซต์ทบทวนวิชา Machine Learning สำหรับ GitHub Pages แบบ static ล้วน (ไม่ต้อง build และไม่มี dependency ภายนอก) เนื้อหาเป็นสรุปที่ผู้จัดทำเรียบเรียงและตรวจทานจากความรู้มาตรฐานของวิชา เนื่องจาก repository นี้ไม่มี source PDF หรือเอกสารประกอบต้นฉบับ จึง **ไม่ได้อ้างว่าเป็นสำเนาหรือแทนที่เอกสารรายวิชา** และไม่มีการสร้าง PDF ปลอม

## เปิดใช้งาน

เปิด `index.html` หรือเผยแพร่โฟลเดอร์นี้เป็น GitHub Pages ได้ทันที ทุกลิงก์เป็น relative path และข้อมูลความคืบหน้าเก็บใน `localStorage` พร้อม versioning

## โครงสร้าง

- `index.html` — learning dashboard แบบ white/navy พร้อม sidebar/drawer, dark mode, progress, labs, quiz และ mock exam
- `tests.html` — browser assertion tests (มากกว่า 25 รายการ)
- `content/chapters.js` — สรุปภาษาไทย สูตร และตัวอย่าง
- `data/questions.js` — คำถามฝึกหัด 90 ข้อ (บทละ 30)
- `data/mock-exam.js` — ข้อสอบจำลอง 30 ข้อ แบ่งบทเท่า ๆ กัน
- `assets/js/` — ES modules สำหรับ UI, state v2, calculators, quiz one-question flow
- `docs/verification.md` — รายการตรวจสอบและข้อจำกัดแหล่งข้อมูล

## UX และการเก็บสถานะ

หน้าเว็บรองรับจอ 360px, keyboard focus, ARIA labels และ `prefers-reduced-motion` โดยไม่ใช้ dependency หรือ network request สถานะทั้งหมดอยู่ใน `localStorage` key `ml225371-study-v2` (theme, font scale, checklist, quiz, mock-exam timer และ streak) การรีเซ็ตล้าง key นี้เท่านั้น

## หมายเหตุด้านวิชาการ

ควรตรวจสูตร/สัญกรณ์และรายละเอียดการให้คะแนนกับเอกสารและอาจารย์ผู้สอนก่อนสอบ เนื้อหานี้เป็น study aid ที่จัดทำขึ้นใน repository ที่ไม่มี source files เดิม
