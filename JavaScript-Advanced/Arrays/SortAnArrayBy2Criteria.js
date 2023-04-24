function solution(input) {
    const newArr = input
    .sort((firstName, secondName) => firstName.length - secondName.length ||
                                     firstName.localeCompare(secondName));
                                     
    console.log(newArr);
}

solution(["alpha", "beta", "gamma"]);
