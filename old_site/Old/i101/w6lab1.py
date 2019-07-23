import random

sentence1 = "What a beautiful week we're having?"
print("Initial sentence: \""+ sentence1 + "\"")

sentence2 = "What a *adj *non we're having?"
sentence2 = sentence2.split()
adj = ['beautiful', 'nice', 'sunny', 'warm', 'mild', 'perfect']
non = ['day', 'week', 'month', 'year', 'time']
indexCount = 0
sentence3 = ""

for word in sentence2:
    if "*adj" in word:
        word = random.choice(adj)
    if "*non" in word:
        word = random.choice(non)
    indexCount += 1
    sentence3 += word + " "
print("Transformed sentence: \""+ sentence3 + "\"")
