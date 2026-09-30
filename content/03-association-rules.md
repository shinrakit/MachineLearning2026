# Association Rules และ Apriori

Apriori สร้าง candidate Ck จาก frequent itemsets Lk-1 แล้ว prune candidate
ที่มี subset ไม่ frequent ก่อนนับ support. ขั้นต่ำของจำนวนธุรกรรมคือ
ceil(N × minSupport) และเกณฑ์เป็น >=.

สำหรับกฎ X -> Y, support คือสัดส่วนธุรกรรมที่มี X และ Y,
confidence = support(X∪Y)/support(X), และ lift =
confidence(X->Y)/support(Y). Lift มากกว่า 1 บอกความสัมพันธ์เชิงบวก
แต่ไม่ใช่หลักฐานเหตุและผล. กฎต้องมี LHS/RHS ไม่ว่างและไม่ทับซ้อนกัน.
