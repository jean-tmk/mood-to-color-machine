# Explores the emotional color model and exports a compact audit table.
moods <- data.frame(
  word = c("sad", "angry", "mad", "melancholy", "jealous", "hopeful", "calm", "anxious", "love"),
  hue = c(214, 1, 4, 224, 114, 47, 190, 29, 344),
  saturation = c(58, 88, 86, 38, 68, 83, 54, 82, 78)
)

circular_distance <- function(a, b) pmin(abs(a - b), 360 - abs(a - b))
distance_matrix <- outer(moods$hue, moods$hue, circular_distance)
rownames(distance_matrix) <- moods$word
colnames(distance_matrix) <- moods$word

moods$nearest_emotion <- vapply(seq_len(nrow(moods)), function(i) {
  distances <- distance_matrix[i, ]
  distances[i] <- Inf
  moods$word[which.min(distances)]
}, character(1))

moods$nearest_hue_distance <- vapply(seq_len(nrow(moods)), function(i) {
  distances <- distance_matrix[i, ]
  distances[i] <- Inf
  min(distances)
}, numeric(1))

write.csv(moods, "analysis/emotion_color_audit.csv", row.names = FALSE)
message("Wrote analysis/emotion_color_audit.csv")
