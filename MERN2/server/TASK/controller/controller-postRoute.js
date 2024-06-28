const Dummy_Data = [{
    title: 'Shyam',
    age: 23,
    address: {
        village: "Tajpur",
        pin: 7634
    },
    mob: 9575869606
}]

const getRouteController = (req, res, next) => {
    res.status(200).json(Dummy_Data)
};


const postRouteController = (req, res, next) => {
    const { title, age, address, mob } = req.body;
    const newData = {
        title,
        age,
        address,
        mob
    }
    Dummy_Data.push(newData);

    res.status(201).json([newData])
};

module.exports = { getRouteController, postRouteController }