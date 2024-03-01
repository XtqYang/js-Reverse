dats_List = [-50, -28, -59, -26, -58, -21]
num_List = bytearray()
for i in dats_List:
    if i < 0:
        i = i + 256
        num_List.append(i)

# text = num_1ist.decode('Utf-8']
text = num_List.decode('gbk')
print(text)
