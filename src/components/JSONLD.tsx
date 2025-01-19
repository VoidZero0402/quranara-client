import Script from "next/script";
import { v4 as uuidv4 } from "uuid";

type JSONLDProps = {
    data: any;
};

function JSONLD({ data }: JSONLDProps) {
    return (
        <Script
            type="application/ld+json"
            id={`json-ld-${uuidv4()}`}
            dangerouslySetInnerHTML={{
                __html: JSON.stringify(data),
            }}
        />
    );
}

export default JSONLD;
