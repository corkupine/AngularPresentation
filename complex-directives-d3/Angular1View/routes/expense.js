
/*
 * Expense backend
 */
var _underscore = require("underscore");
var _records = {
    result:
    [
        {
            id: 1,
            category: 'Pharmacy',
            description: 'Pain Reliever',
            date: '2012-01-20T18:25:43.511Z',
            amount: '10.20',
            provider: {
                name: "CVS",
                address: "1048 Farmington Ave, West Hartford, CT 06107",
                state: "CT"
            }
        },
        {
            id: 2,
            category: 'Pharmacy',
            description: 'Bandages',
            date: '2012-02-18T18:25:43.511Z',
            amount: '5.3',
            provider: {
                name: "CVS",
                address: "1048 Farmington Ave, West Hartford, CT 06107",
                state: "CT"
            }
        },
        {
            id: 3,
            category: 'Dental',
            description: 'Cleaning',
            date: '2012-03-23T18:25:43.511Z',
            amount: '150',
            provider: {
                name: "Dentonics",
                address: "82 Hopmeadow, Simsbury CT",
                state: "CT"
            }
        },
        {
            id: 4,
            category: 'Pharmacy',
            description: 'Cold medicine',
            date: '2012-04-23T18:25:43.511Z',
            amount: '13.65',
            provider: {
                name: "CVS",
                address: "1048 Farmington Ave, West Hartford, CT 06107",
                state: "CT"
            }
        },
        {
            id: 5,
            category: 'Chiropractic',
            description: 'Adjustment',
            date: '2012-08-23T18:25:43.511Z',
            amount: '110.85',
            provider: {
                name: "Corsello Clinic Of Chiropractic",
                address: "2021 Main Street Stratford, CT 06615",
                state: "CT"
            }
        },
        {
            id: 6,
            category: 'Dental',
            description: 'Filling',
            date: '2012-10-23T18:25:43.511Z',
            amount: '85.25',
            provider: {
                name: "Wex Dental",
                address: "97 Darling Ave South Portland, ME 04106",
                state: "ME"
            }
        },
        {
            id: 7,
            category: 'Medical',
            description: 'Mummification',
            date: '2044-10-23T18:25:43.511Z',
            amount: '3485.25',
            provider: {
                name: "Summum",
                address: "707 Genesee Avenue Salt Lake City, Utah 84104",
                state: "UT"
            }
        }
    ]
};
/* GET expenses. */
exports.search = function (req, res) {
    res.send(_records);
};

//return expenses group by state
exports.summary = function(req, res) {
    res.send({
        result: _underscore.countBy(_records.result, function(r) { return r.provider.state; })
    });
};