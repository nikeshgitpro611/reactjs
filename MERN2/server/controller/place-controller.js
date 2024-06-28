const { v4: uuidv4 } = require("uuid");
const HttpError = require("../modal/http-error");
//Dummy Data
const DUMMY_DATA = [{
    id: 'p1',
    title: 'Empire State Building',
    description: 'One of the most famous sky scrapers in the world!',
    imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',
    address: '20 W 34th St, New York, NY 10001',
    location: {
        lat: 40.7484405,
        lng: -73.9878584
    },
    creator: 'u1'
}]

const showAllData = (req, res, next) => {
    res.status(201).json({ message: DUMMY_DATA })
};


const getPlaceById = (req, res, next) => {
    const { pid } = req.params;

    const dummyPlace = DUMMY_DATA.find(data => {
        return data.id === pid
    })
    if (!dummyPlace) {

        next(new HttpError('Cound not find the place check id', 404))
        // res.status(404).json({message : 'Cound not find the place check id'})
    }
    console.log('Get Request In Places...');
    res.status(201).json({ message: dummyPlace })
};


const getPlaceByUserId = (req, res, next) => {
    const { uid } = req.params;
    const place = DUMMY_DATA.find(data => {
        return data.creator === uid
    });

    if (!place) {
        // const error = new Error('Cound not find the place user check id')
        // error.code = 404
        return next(new HttpError('Cound not find the place user check id', 404))
        // res.status(404).json({ message: 'Cound not find the place check id' })
    }
    console.log('user', place);
    res.status(200).json({ message: place })
}

const creatPlace = (req, res, next) => {
    const { title, description, location, address, creator } = req.body;

    const createdPlace = {
        id: uuidv4(),
        title,
        description,
        location,
        address,
        creator
    }

    DUMMY_DATA.push(createdPlace);

    res.status(201).json(createdPlace);
}

const updatePlace = (req, res, next) => {
    const { title, description } = req.body;
    const { pid } = req.params;
    const placeIndex = DUMMY_DATA.findIndex(data => data.id === pid);

    if (placeIndex === -1) {
        return res.status(404).json({ message: 'Place not found' });
    }
    const updatedPlace = {...DUMMY_DATA[placeIndex]};
    updatedPlace.title = title || updatedPlace.title;
    updatedPlace.description = description || updatedPlace.title;

    DUMMY_DATA[placeIndex] = updatedPlace
    res.status(200).json({place : updatedPlace})
}


const deletePlace = (req, res, next) => { }

module.exports = { showAllData, getPlaceById, getPlaceByUserId, creatPlace, updatePlace, deletePlace }