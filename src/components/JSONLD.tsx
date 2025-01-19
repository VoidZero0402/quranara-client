import Head from "next/head";
import Script from "next/script";

type JSONLDProps = {
    data: any;
};

function JSONLD({ data }: JSONLDProps) {
    return (
        <Head>
            <Script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(data),
                }}
            ></Script>
        </Head>
    );
}

export default JSONLD;
