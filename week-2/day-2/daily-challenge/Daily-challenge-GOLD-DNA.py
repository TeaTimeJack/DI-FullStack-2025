import random

class Gene:
    def __init__(self):
        self.gene = random.randint(0,1)
    
    def merg_gene(self,gene1, gene2):
        if gene1 == gene2:
            return gene1

        will_gene_mutate = random.randint(0,1)
        if will_gene_mutate:
             return gene2
        return gene1
    
class Chromosomes(Gene):

    def __init__(self):
        super().__init__()
        self.chromosome_list = []  

    def creat_chromosome_list(self):
        while len(self.chromosome_list) < 10: 
            gene = Gene()
            self.chromosome_list.append(gene.gene)
        return self.chromosome_list

    def merg_chromosomes(self, chromosome1, chromosome2):
        if chromosome1 == chromosome2:
            return chromosome1
        temp_chromosome = list(chromosome1)
        for gene_index in range(len(temp_chromosome)):
             temp_chromosome[gene_index] = self.merg_gene(temp_chromosome[gene_index], chromosome2[gene_index])
        return temp_chromosome
# organisim_chro = Chromosomes()
# organisim_chro2 = Chromosomes()
# organisim_chro.creat_chromosome_list()
# organisim_chro2.creat_chromosome_list()
# print(organisim_chro.chromosome_list)
# print(organisim_chro2.chromosome_list)
# organisim_chro.merg_chromosomes(organisim_chro2)
# print(organisim_chro.chromosome_list)
             
class DNA(Chromosomes):
    def __init__(self):
       super().__init__()
       self.dna_list = []

    def make_DNA(self):
        while len(self.dna_list) < 10:
           chromosome = Chromosomes()
           self.dna_list.append(chromosome.creat_chromosome_list())
        return self.dna_list
    
    def merge_DNA(self, dna2):
        for chromo_index in range(len(self.dna_list)):
            if self.dna_list[chromo_index] == dna2.dna_list[chromo_index]:
                continue
            self.dna_list[chromo_index] = self.merg_chromosomes(self.dna_list[chromo_index], dna2.dna_list[chromo_index])
        return self.dna_list

# dna1 = DNA()
# dna1.make_DNA()
# dna2 = DNA()
# dna2.make_DNA()
# print(dna1.dna_list)
# print(dna2.dna_list)
# dna1.merge_DNA(dna2)
# print(dna1.dna_list)


#my code works but very unefficaint....
# count =0
# organism1 = DNA()
# organism1.make_DNA()
# organism1_const_list = organism1.dna_list
# while True:
#     number_of_one = 0
#     for chromosom_index in range(len(organism1_const_list)):
#         chromosom_sum = sum(organism1_const_list[chromosom_index])
#         while chromosom_sum < 10:
#             for gene_indx in range(len(organism1_const_list[chromosom_index])):
#                 the_gene = organism1_const_list[chromosom_index][gene_indx]    
#                 while the_gene < 1:
#                     organism2 = DNA()
#                     organism2.make_DNA()
#                     organism1.merge_DNA(organism2)
#                     count +=1
#                     if organism1.dna_list[chromosom_index][gene_indx] == 1:
#                         organism1_const_list[chromosom_index][gene_indx] = organism1.dna_list[chromosom_index][gene_indx]
#                         the_gene = 1 
#             chromosom_sum = sum(organism1_const_list[chromosom_index])
#         number_of_one+=10
#     #organism1.dna_list = organism1_const_list    
#     if number_of_one == 90:
#         break
# print(organism1_const_list)    
# print(count)                
                
    
count = 0
organism1 = DNA()
organism1.make_DNA()

while any(0 in chromo for chromo in organism1.dna_list):
    organism2 = DNA()
    organism2.make_DNA()
    
    organism1.merge_DNA(organism2)
    count += 1

print(organism1.dna_list)
print(f"Number of merges: {count}")

