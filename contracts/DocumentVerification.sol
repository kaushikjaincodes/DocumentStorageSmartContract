// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;


contract DocumentVerification {

    struct PersonalInfo {
        string name;
        string gender;
        string id; 
        string dob; 
        bool exists;
    }


    mapping(string => PersonalInfo) private documents;

    event DocumentIssued(string indexed id, string name, string gender, string dob); // defines what info will be logged

    function issueDocument(
        string memory name,
        string memory gender,
        string memory id,
        string memory dob
    ) public {
        documents[id] = PersonalInfo({
            name: name,
            gender: gender,
            id: id,
            dob: dob,
            exists: true
        });
        emit DocumentIssued(id, name, gender, dob); 
    }

    function getDocument(string memory id) public view returns (string memory name, string memory gender, string memory documentId, string memory dob, bool exists) {
        PersonalInfo memory info = documents[id];
        return (info.name, info.gender, info.id, info.dob, info.exists);
    }
}
