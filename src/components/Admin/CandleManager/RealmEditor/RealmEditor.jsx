import React, {useState} from "react";
import axios from "../../../../axios";

import Realm from "../../../Products/RealmSelector/Realm/Realm";
import Spinner from "../../../UI/Spinner/Spinner";

import classes from "./RealmEditor.module.css";

const RealmEditor = (props) => {
    const [realms, setRealms] = useState([]);
    const [loading, setLoading] = useState(true);

        axios.get("/realms.json")
            .then(res => {
                setLoading(false);
                
                const fetchedRealms = [];

                for (let key in res.data) {
                    fetchedRealms.push({
                        ...res.data[key],
                        id: key
                    });
                }

                const updatedRealms = fetchedRealms.map(realm => {
                    return (
                        <Realm
                            key={realm.id}
                            name={realm.name}
                            img={realm.img}
                            onClick={() => props.onChange(0)} />
                    );
                });
                
                setRealms(updatedRealms);
            })
            .catch(error => {
                setLoading(false);
            });

    let content;

    if (loading) {
        content = <Spinner />;
    } else {
        content = realms;
    }

    return (
        <div className={classes.RealmEditor}>
            {content}
        </div>
    );
}

export default RealmEditor;