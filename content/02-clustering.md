# Clustering

K-means สลับสองขั้นตอนจนกว่าจะคงที่: assign จุดไปยัง centroid ที่ใกล้ที่สุด
(ถ้าเสมอเลือก cluster หมายเลขต่ำสุด) แล้ว update centroid เป็นค่าเฉลี่ยสมาชิก.
ถ้า cluster ว่างให้คง centroid เดิมและแจ้งนโยบาย.

Hierarchical clustering รวมกลุ่มทีละคู่ตาม linkage: single ใช้ค่าน้อยสุด,
complete ใช้ค่ามากสุด, average เฉลี่ยทุกคู่, centroid วัดระยะ centroid
และ Ward เลือกค่า ΔSSE ที่เพิ่มขึ้นน้อยสุด. DBSCAN นับจุดตัวเองใน MinPts
และใช้ระยะ <= eps. WCSS ลดลงเมื่อเพิ่ม K จึงควรใช้ elbow, silhouette และ
ความหมายของโดเมนร่วมกัน ไม่เลือก K จากตัวชี้วัดเดียว.
