export const testData = [
    {
        "id": 1,
        "name": "1",
        "child": [
            {
                "id": 11,
                "name": "1-1",
                "child": [
                    {
                        "id": 111,
                        "name": "1-1-1(无法被选中,可展开)",
                        "canNotClick":true,
                        "child": [
                            {
                                "id": 1111,
                                "name": "1-1-1-1",
                                "child": [
                                    {
                                        "id": 11111,
                                        "name": "1-1-1-1-1"                                   
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "id": 2,
        "name": "2",
        "child": [
            {
                "id": 21,
                "name": "2-1",
                "child": [
                    {
                        "id": 211,
                        "name": "2-1-1",
                    },
                    {
                        "id": 212,
                        "name": "2-1-2",
                    }
                ]
            },
            {
                "id": 22,
                "name": "2-2",
                "child": [
                    {
                        "id": 221,
                        "name": "2-2-1",
                        "child": [
                            {
                                "id": 2211,
                                "name": "2-2-1-1"
                            }
                        ]
                    }
                ]
            }
        ]
    }
]
