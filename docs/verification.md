# Verification

ตรวจสอบแบบ manual/static ดังนี้

1. เปิด `index.html` ด้วย browser โดยตรงได้ (ไม่มี module จาก CDN และไม่มี build step)
2. ใช้ relative links, `lang="th"`, landmark/label และ focus-visible styles
3. `tests.html` รัน assertion ใน browser อย่างน้อย 25 รายการ ครอบคลุม dataset counts, chapter balance, scoring และ calculators
4. ตรวจ JSON-like module exports ด้วย syntax ที่ browser รองรับ (ES modules)
5. ทดสอบ responsive ที่ความกว้าง 360px และ 1280px: desktop sidebar/mobile drawer, cards และตารางไม่ล้นแนวนอน
6. ตรวจว่า `ml225371-study-v2` บันทึก theme, font scale, checklist, quiz และ exam timer ได้ และ mock exam ไม่แสดงเฉลยก่อน submit
7. เปิดผ่าน HTTP server แล้ว smoke-test `index.html`, `tests.html`, module assets และ content/data files ด้วย status 200

ไม่มี source PDF/ไฟล์ต้นฉบับใน repository ณ เวลาจัดทำ จึงบันทึกข้อจำกัดนี้แทนการสร้างหรืออ้างอิงเอกสารที่ไม่มีอยู่จริง
