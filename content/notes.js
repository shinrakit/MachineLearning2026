export const notes=[
  {title:"สูตร Model Evaluation",body:"Accuracy=(TP+TN)/N · Precision=TP/(TP+FP) · Recall=TP/(TP+FN) · F1=2TP/(2TP+FP+FN). ตัวหารศูนย์ให้รายงานว่าคำนวณไม่ได้"},
  {title:"Clustering",body:"K-means: assign → update → ตรวจหยุด; tie ใช้ cluster ต่ำสุด, empty cluster คง centroid. DBSCAN นับตัวเองใน MinPts และใช้ระยะ <= eps"},
  {title:"Association Rules",body:"Support=count/N · Confidence=support(X∪Y)/support(X) · Lift=confidence/support(Y). Apriori ใช้ ceil(N×minSupport), เกณฑ์ >= และไม่ใช่เหตุผลเชิงสาเหตุ"}
];
