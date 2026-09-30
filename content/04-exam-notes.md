# เตรียมเนื้อหาสำหรับจด

## สูตรจำเป็น
- Accuracy = (TP+TN)/N
- Precision = TP/(TP+FP), Recall = TP/(TP+FN)
- F1 = 2TP/(2TP+FP+FN)
- Support(X) = count(X)/N
- Confidence(X→Y) = support(X∪Y)/support(X)
- Lift(X→Y) = confidence(X→Y)/support(Y)

## ขั้นตอนที่ควรจำ
1. K-means: assign → update → ตรวจหยุด; tie ใช้ cluster ต่ำสุด และ empty cluster คง centroid
2. Apriori: Ck → prune → count → Lk; ขั้นต่ำ `ceil(N × minSupport)`
3. DBSCAN: นับตัวเองใน MinPts และใช้ระยะ `<= eps`

ตรวจเงื่อนไขจำนวนหน้าและการเขียน/พิมพ์กับอาจารย์ก่อนสอบ
