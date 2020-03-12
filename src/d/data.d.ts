declare namespace hrise {
    namespace data {
        interface Meta {
            raw: any;
            type: string;
            meme?: string;
        }
        interface Adaptor {
            adapt(data: Meta): any;
        }
    }
}
