export const chapters = [
  {
    id: "ch1", title: "บทที่ 1 พื้นฐาน Machine Learning และการประเมินผล",
    summary: "Machine Learning (ML) ให้คอมพิวเตอร์เรียนรูปแบบจากข้อมูลเพื่อทำนายหรืออธิบาย โดยต้องแยกปัญหา ชนิดข้อมูล และ metric ให้ตรงเป้าหมาย",
    sections: [
      {heading:"กรอบคิด", body:"Supervised learning มี label (classification/regression), unsupervised learning ไม่มี label (clustering/association) และ reinforcement learning เรียนจาก reward. แบ่งข้อมูลเป็น train สำหรับเรียน, validation สำหรับเลือกแบบจำลอง และ test สำหรับรายงานผลครั้งสุดท้าย ห้ามใช้ test ตัดสินใจซ้ำ ๆ"},
      {heading:"สูตรสำคัญ", formulas:["Accuracy = (TP + TN) / (TP + TN + FP + FN)","Precision = TP / (TP + FP)","Recall = TP / (TP + FN)","F1 = 2·Precision·Recall / (Precision + Recall)","MSE = (1/n) Σ(yᵢ − ŷᵢ)²"], body:"เลือก precision เมื่อ false positive แพง เช่น การบล็อกลูกค้าปกติ เลือก recall เมื่อ false negative แพง เช่น คัดกรองโรค และใช้ stratified split เมื่อ class imbalance สำคัญ"},
      {heading:"ตัวอย่าง", body:"โมเดลตรวจ spam มี TP=45, FP=5, FN=10, TN=940: accuracy=98.5%, precision=90%, recall≈81.8%, F1≈85.7%. Accuracy สูงไม่ได้แปลว่าโมเดลดีเสมอเมื่อ positive มีน้อย"}
    ]
  },
  {
    id: "ch2", title: "บทที่ 2 Clustering และการแบ่งกลุ่ม",
    summary: "ค้นหาโครงสร้างในข้อมูลที่ไม่มี label ด้วย k-means และ hierarchical clustering พร้อมวัดคุณภาพและตีความกลุ่มอย่างระมัดระวัง",
    sections: [
      {heading:"k-means: assign และ update", formulas:["WCSS = Σᵢ Σₓ∈Cᵢ ||x−μᵢ||²","μᵢ = (1/|Cᵢ|) Σₓ∈Cᵢ x"], body:"ทำซ้ำสองขั้น: assign จุดให้ centroid ที่ใกล้ที่สุด แล้ว update centroid เป็นค่าเฉลี่ยของสมาชิก ทดลองหลาย initialization และเลือก k ด้วย elbow หรือ silhouette"},
      {heading:"Hierarchical clustering", formulas:["Single = min d(a,b)","Complete = max d(a,b)","Average = ค่าเฉลี่ย d(a,b) ทุกคู่"], body:"Agglomerative เริ่มจากจุดเดี่ยวแล้ว merge ตาม linkage ได้ dendrogram การตัดต้นไม้ที่ระดับหนึ่งให้จำนวนกลุ่มตามต้องการ ควร standardize feature หากหน่วยต่างกัน"},
      {heading:"ประเมินและตีความ", formulas:["Silhouette s=(b−a)/max(a,b)"], body:"ค่า silhouette ใกล้ 1 แปลว่าจุดอยู่ในกลุ่มเหมาะสม แต่ metric ไม่แทน domain context ตรวจ outlier, ขนาดกลุ่ม และความหมายของ feature ก่อนสรุปผล"}
    ]
  },
  {
    id: "ch3", title: "บทที่ 3 Unsupervised Learning และการค้นหารูปแบบ",
    summary: "เรียนรู้การแบ่งกลุ่มด้วย k-means/hierarchical clustering และค้นหากฎร่วมของสินค้าแบบ Apriori พร้อมระวัง scale และการตีความ",
    sections: [
      {heading:"k-means", body:"ทำซ้ำ 2 ขั้น: assign จุดให้ centroid ที่ใกล้ที่สุด แล้ว update centroid เป็นค่าเฉลี่ยของสมาชิก เป้าหมายคือ minimize within-cluster sum of squares (WCSS). ทดลองหลาย initialization และเลือก k ด้วย elbow หรือ silhouette ไม่ควรตีความหมาย cluster โดยไม่มี domain context"},
      {heading:"Hierarchical และ linkage", formulas:["Single linkage = min d(a,b)","Complete linkage = max d(a,b)","Average linkage = ค่าเฉลี่ย d(a,b) ทุกคู่","Silhouette s=(b−a)/max(a,b)"], body:"Agglomerative เริ่มจาก singleton แล้ว merge ตาม linkage ได้ dendrogram; การตัดต้นไม้ที่ระดับหนึ่งให้จำนวนกลุ่มที่ต้องการ. Standardize features หากหน่วยต่างกัน"},
      {heading:"Association rules", formulas:["support(X→Y)=support(X∪Y)","confidence(X→Y)=support(X∪Y)/support(X)","lift(X→Y)=confidence(X→Y)/support(Y)"], body:"Apriori ใช้ downward closure: ถ้า itemset ไม่ frequent แล้ว superset จะไม่ frequent. สร้าง candidate, prune ด้วย minimum support แล้วแตกกฎที่ผ่าน minimum confidence. Lift>1 บ่งชี้ความสัมพันธ์มากกว่าความถี่ฐาน ไม่ใช่เหตุและผล"}
    ]
  }
];
