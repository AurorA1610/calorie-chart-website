const foods = [

    {
        id: 1,
        name: 'Yogurt',
        category: 'Milk',
        carbohydrateInGrams: 34,
        calorie: 220, 
        type: 'Simple Carbohydrate',
        img: 'https://www.saboresdemihuerto.com/wp-content/uploads/2018/11/yogurt-casero-cuadrado.jpg',
        servingInGrams: 227
    },

    {
        id: 2,
        name: 'Chocolate milk',
        category: 'Milk',
        carbohydrateInGrams: 26,
        calorie: 208, 
        type: 'Simple Carbohydrate',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlQkV_U6s7VSFwTUh9fSz8wqFlxsJtXlDwMg&usqp=CAU',
        servingInGrams: 101
    },

    {
        id: 3,
        name: 'Banana',
        category: 'Fruits',
        carbohydrateInGrams: 27,
        calorie: 105, 
        type: 'Simple Carbohydrate',
        img: 'https://images.everydayhealth.com/images/diet-nutrition/how-many-calories-are-in-a-banana-1440x810.jpg',
        servingInGrams: 125
    },
    
    {
        id: 4,
        name: 'Biscuit',
        category: 'Grains',
        carbohydrateInGrams: 13,
        calorie: 103, 
        type: 'Complex Carbohydrate',
        img: 'https://static.toiimg.com/thumb/63760822.cms?width=1200&height=900',
        servingInGrams: 80
    },

    {
        id: 5,
        name: 'Carrot',
        category: 'Vegetables',
        carbohydrateInGrams: 8,
        calorie: 31, 
        type: 'Complex Carbohydrate',
        img: 'https://medcitynews.com/wp-content/uploads/2017/11/GettyImages-166106089-600x464.jpg',
        servingInGrams: 120
    },

    {
        id: 6,
        name: 'Pear',
        category: 'Fruits',
        carbohydrateInGrams: 25,
        calorie: 98, 
        type: 'Simple Carbohydrate',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC2lBJnoK4ouQL6mU51V-NkYiYgoyBUKvi6Q&usqp=CAU',
        servingInGrams: 120
    },

    {
        id: 7,
        name: 'Potato',
        category: 'Vegetables',
        carbohydrateInGrams: 50,
        calorie: 220, 
        type: 'Complex Carbohydrate',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvhuXo0_L_RlHF8GzPfN8yapVp0o1lBhOBhA&usqp=CAU',
        servingInGrams: 136
    },

    {
        id: 8,
        name: 'Strawberries',
        category: 'Fruits',
        carbohydrateInGrams: 11,
        calorie: 45, 
        type: 'Simple Carbohydrate',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAMTcUVjN3PpASPetUw4jig6D7bgIYEDa6BA&usqp=CAU',
        servingInGrams: 152
    },

    {
        id: 9,
        name: 'Pudding',
        category: 'Milk',
        carbohydrateInGrams: 30,
        calorie: 161, 
        type: 'Simple Carbohydrate',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3FgxF3tdHFy9p9jy6kALzFIyj1L52QgOMQw&usqp=CAU',
        servingInGrams: 101
    },

    {
        id: 10,
        name: 'White beans ',
        category: 'Beans',
        carbohydrateInGrams: 45,
        calorie: 249, 
        type: 'Complex Carbohydrate',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsVoyRb6eOoxy789WGmML1mst3LDxxnDSxvg&usqp=CAU',
        servingInGrams: 72
    },

    {
        id: 11,
        name: 'Orange',
        category: 'Fruits',
        carbohydrateInGrams: 16,
        calorie: 65, 
        type: 'Simple Carbohydrate',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYysoVW2L-v8EEwq1a8ChyQL2HV7NQtd8zFg&usqp=CAU',
        servingInGrams: 131
    },

    {
        id: 12,
        name: 'Dates',
        category: 'Fruits',
        carbohydrateInGrams: 61,
        calorie: 228, 
        type: 'Simple Carbohydrate',
        img: 'https://images.medicinenet.com/images/article/main_image/eating-dates.jpg',
        servingInGrams: 21.3
    },

    {
        id: 13,
        name: 'Black eye peas',
        category: 'Beans',
        carbohydrateInGrams: 22,
        calorie: 134, 
        type: 'Complex Carbohydrate',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlgtzXVPkM0DLNPqVbQkINp6vLS-b00FHwHA&usqp=CAU',
        servingInGrams: 36.3
    },

    {
        id: 14,
        name: 'Bread',
        category: 'Grains',
        carbohydrateInGrams: 12,
        calorie: 61, 
        type: 'Complex Carbohydrate',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp9uuiMKA_tdJdaPJ4t3PdtO9w9eiXDqoquQ&usqp=CAU',
        servingInGrams: 15
    },

    {
        id: 15,
        name: 'English Muffin',
        category: 'Grains',
        carbohydrateInGrams: 25,
        calorie: 130, 
        type: 'Complex Carbohydrate',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXzz0po2r_T7Ac_8-72f3a2HoocEM1kasauQ&usqp=CAU',
        servingInGrams: 57
    },
    
    {
        id: 16,
        name: 'Skim milk',
        category: 'Milk',
        carbohydrateInGrams: 12,
        calorie: 86, 
        type: 'Simple Carbohydrate',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM7_H2SCnUsMvT6l3J_NlhQeGqh1JvCWeGcg&usqp=CAU',
        servingInGrams: 247
    },

    {
        id: 17,
        name: 'Apple',
        category: 'Fruits',
        carbohydrateInGrams: 21,
        calorie: 81, 
        type: 'Simple Carbohydrate',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB34NO57glHFl9PL_sF8VAgJ9HwE7RDjd-YQ&usqp=CAU',
        servingInGrams: 182
    },

    {
        id: 18,
        name: 'Cantaloupe',
        category: 'Fruits',
        carbohydrateInGrams: 14,
        calorie: 57, 
        type: 'Simple Carbohydrate',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnyXZXlrJcDtccqCNALLDau1VnVuN1w7PTHQ&usqp=CAU',
        servingInGrams: 138
    },

    {
        id: 19,
        name: 'Beans, Lima ',
        category: 'Vegetables',
        carbohydrateInGrams: 20,
        calorie: 108, 
        type: 'Complex Carbohydrate',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBihkm-OD915rmllCwDeUcKYV09H7wj2FNoQ&usqp=CAU',
        servingInGrams: 130
    },

    {
        id: 20,
        name: 'Sweet Potato ',
        category: 'Vegetables',
        carbohydrateInGrams: 28,
        calorie: 118, 
        type: 'Complex Carbohydrate',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRk3z3MMTncBih8RHBfcyQ2MjQKgUns745xQ&usqp=CAU',
        servingInGrams: 130
    },

    {
        id: 21,
        name: 'Pancake',
        category: 'Grains',
        carbohydrateInGrams: 10,
        calorie: 41, 
        type: 'Complex Carbohydrate',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRaFDSUVg3-GeMdXvbXoJ1gKek7YudYWW6pA&usqp=CAU',
        servingInGrams: 76
    },

]