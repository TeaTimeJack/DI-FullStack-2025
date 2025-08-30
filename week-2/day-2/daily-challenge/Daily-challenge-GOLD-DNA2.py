
import random

class Gene():
    def __init__(self):
        pass

    def genetate_gane(self):
        gene = random.randint(0,1)
        return gene
    
class Chromosone(Gene):
    def __init__(self):
        super().__init__()

    def genetate_chromosone(self):
        chromosone_list = []
        for i in range(10):
          gene = self.genetate_gane()
          chromosone_list.append(gene)
        return chromosone_list  
    

class DNA(Chromosone):
    def __init__(self):
        super().__init__()
        self.dna_list=[]
    def genetate_dna(self):
        for i in range(10):
            chromosone = self.genetate_chromosone()
            self.dna_list.append(chromosone)
        return self.dna_list    
    
    def merge_dna(self, dna2):
        for i, chromoson in enumerate(self.dna_list):
            for j, gene in enumerate(chromoson):
                if gene == dna2[i][j]:
                    continue
                else:
                    will_gene_mutate = random.randint(0,1)
                    if will_gene_mutate:
                        self.dna_list[i][j] = dna2[i][j]
                    else:
                        continue
        return self.dna_list            



# dna1 = DNA()
# dna1.genetate_dna()
# print(dna1.dna_list)
# print("*****")
# dna2 = DNA()
# dna2.genetate_dna()
# print(dna2.dna_list)
# print("*****")
# dna1.merge_dna(dna2.dna_list)
# print(dna1.dna_list)

count = 0
organism1 = DNA()
organism1.genetate_dna()
print(organism1.dna_list)

for i, chromoson in enumerate(organism1.dna_list):
        if sum(chromoson) == 10:
            continue
        for j, gene in enumerate(chromoson):
            if gene == 1:
                continue
            else:
                while organism1.dna_list[i][j] < 1:
                    organism2 = DNA()
                    organism2.genetate_dna()
                    count+=1
                    if organism2.dna_list[i][j] == 1:
                        will_gene_mutate = random.randint(0,1)
                        if will_gene_mutate:
                            organism1.dna_list[i][j] = organism2.dna_list[i][j]

print(organism1.dna_list) 
print(count)                           
 