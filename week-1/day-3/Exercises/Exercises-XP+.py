import math

student_grades = {
    "Alice": [88, 92, 100],
    "Bob": [75, 78, 80],
    "Charlie": [92, 90, 85],
    "Dana": [83, 88, 92],
    "Eli": [78, 80, 72]
}

student_avarages ={

}

student_letter_grades ={
    
}


for name, grades in student_grades.items():
    grades_sum = sum(grades)
    avrg = math.ceil(grades_sum/len(grades))
    student_avarages[name] = avrg
    letter_val = ''
    if avrg > 89:
        letter_val = "A"
    elif avrg > 79:
        letter_val = "B"
    elif avrg > 69:
        letter_val = "C"
    elif avrg > 59:
        letter_val = "D"
    else:
        letter_val = "F"
    student_letter_grades[name]= letter_val
print(student_grades)
print(student_avarages)
print(student_letter_grades)

sum_class = 0
num_of_grades = 0
for grade in student_avarages.values():
    num_of_grades += 1
    sum_class += grade
avrg_class = math.ceil(sum_class/num_of_grades)

print(avrg_class)
for name in student_avarages.keys():
    print(f"{name}: avrge grade: {student_avarages[name]} letter grade: {student_letter_grades[name]}")



    #Exercise 2 : Advanced Data Manipulation and Analysis

sales_data = [
    {"customer_id": 1, "product": "Smartphone", "price": 600, "quantity": 1, "date": "2023-04-03"},
    {"customer_id": 2, "product": "Laptop", "price": 1200, "quantity": 1, "date": "2023-04-04"},
    {"customer_id": 1, "product": "Laptop", "price": 1000, "quantity": 1, "date": "2023-04-05"},
    {"customer_id": 2, "product": "Smartphone", "price": 500, "quantity": 2, "date": "2023-04-06"},
    {"customer_id": 3, "product": "Headphones", "price": 150, "quantity": 4, "date": "2023-04-07"},
    {"customer_id": 3, "product": "Smartphone", "price": 550, "quantity": 1, "date": "2023-04-08"},
    {"customer_id": 1, "product": "Headphones", "price": 100, "quantity": 2, "date": "2023-04-09"},
]

total_revenue_generated = {}

for item in sales_data:
    if item["product"] not in total_revenue_generated:
        total_revenue_generated[item["product"]] = item["price"]
    else:  total_revenue_generated[item["product"]] += item["price"]
print(total_revenue_generated)

customer_spending = {}

for item in sales_data:
    if item["customer_id"] not in customer_spending:
        customer_spending[item["customer_id"]] = item["price"]
    else:  customer_spending[item["customer_id"]] += item["price"]
print(customer_spending)


for item in sales_data:
    item["total_price"] = item["price"] * item["quantity"]
print(sales_data)


new_list = [item for item in sales_data if item["total_price"] > 500]
print(new_list)
for i in range(len(new_list)):
    for j in range(i+1, len(new_list)):
        if new_list[i]["total_price"] < new_list[j]["total_price"]:
            temp = new_list[i]["total_price"]
            new_list[i]["total_price"] = new_list[j]["total_price"]
            new_list[j]["total_price"] = temp
    
print(new_list)


# # 4. High-Value Transactions
# high_value_transactions = [transaction for transaction in sales_data if transaction["total_price"] > 500]
# # Sorting without lambda
# high_value_transactions.sort(key=lambda x: x["total_price"], reverse=True)


# # 5. Customer Loyalty Identification
# purchase_counts = {}
# for transaction in sales_data:
#     customer_id = transaction["customer_id"]
#     if customer_id in purchase_counts:
#         purchase_counts[customer_id] += 1
#     else:
#         purchase_counts[customer_id] = 1
# loyal_customers = [customer_id for customer_id, count in purchase_counts.items() if count > 2]

# print("Total Sales:", total_sales)
# print("Customer Spending:", customer_spending)
# print("First Two Sales Data Entries:", sales_data[:2])
# print("Loyal Customers:", loyal_customers)

# # Bonus: Insights and Analysis

# # Calculating the average transaction value for each product category
# average_transaction_value = {}
# for product in total_sales.keys():
#     total_quantity = sum(transaction["quantity"] for transaction in sales_data if transaction["product"] == product)
#     average_transaction_value[product] = total_sales[product] / total_quantity

# # Identifying the most popular product based on the quantity sold
# product_quantities = {product: sum(transaction["quantity"] for transaction in sales_data if transaction["product"] == product) for product in set(transaction["product"] for transaction in sales_data)}
# most_popular_product = max(product_quantities, key=product_quantities.get)

# # Insights into how these analyses could inform the company's marketing strategies
# """
# Insights:
# 1. Products with higher average transaction values might indicate premium pricing or higher-end products. Marketing strategies could focus on highlighting the quality and features of these products to attract customers willing to pay more.

# 2. The most popular product, based on quantity sold, indicates consumer preference and demand. Marketing strategies could include promoting this product more aggressively, bundling it with other products, or exploring ways to upsell customers to higher-value items related to the most popular product.

# 3. Understanding both the average transaction value and the most popular products can help in inventory management, targeting advertising campaigns, and developing promotions that drive sales in specific product categories.
# """

# print("Average Transaction Value:", average_transaction_value)
# print("Most Popular Product:", most_popular_product)