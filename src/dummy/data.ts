export interface DataProduct {
    id: string;
    title: string;
    description: string;
    image: string;
    price: number;
    category: 'Beras' | 'Minyak' | 'Gula' | 'Telur';
    onClick?: () => void;
    detail?: string; // Properti opsional untuk deskripsi lebih detail
}

export const data: DataProduct[] = [
    {
        id: "1",
        title: "Beras Pandan Wangi",
        image: "",
        description: "Beras pandan wangi asli, pulen dan harum khas.",
        price: 15000,
        category: "Beras",
        detail: "Beras Pandan Wangi diproduksi dari padi unggulan dengan proses penggilingan modern, menghasilkan beras yang pulen dan wangi. Cocok untuk nasi putih sehari-hari atau hidangan spesial."
    },
    {
        id: "2",
        title: "Beras Merah Organik",
        image: "",
        description: "Beras merah organik, kaya serat dan nutrisi.",
        price: 20000,
        category: "Beras",
        detail: "Beras Merah Organik ditanam tanpa pestisida dan bahan kimia, kaya akan serat dan nutrisi. Cocok untuk diet sehat dan penderita diabetes."
    },
    {
        id: "3",
        title: "Minyak Goreng Kelapa",
        image: "",
        description: "Minyak goreng kelapa murni, sehat dan rendah kolesterol.",
        price: 25000,
        category: "Minyak",
        detail: "Minyak Goreng Kelapa dibuat dari kelapa segar, mengandung asam lemak baik yang ramah untuk jantung. Cocok untuk menggoreng dan menumis."
    },
    {
        id: "4",
        title: "Minyak Goreng Sawit",
        image: "",
        description: "Minyak goreng sawit kemasan 2 liter, ekonomis.",
        price: 30000,
        category: "Minyak",
        detail: "Minyak Goreng Sawit diproses dari buah kelapa sawit pilihan, tahan lama, dan ekonomis. Cocok untuk kebutuhan rumah tangga dan usaha."
    },
    {
        id: "5",
        title: "Gula Pasir Putih",
        image: "",
        description: "Gula pasir putih halus, cocok untuk minuman dan masakan.",
        price: 12000,
        category: "Gula",
        detail: "Gula Pasir Putih diproduksi dari tebu pilihan, halus dan mudah larut. Cocok untuk minuman, kue, dan masakan sehari-hari."
    },
    {
        id: "6",
        title: "Gula Merah",
        image: "",
        description: "Gula merah alami, cocok untuk minuman tradisional.",
        price: 15000,
        category: "Gula",
        detail: "Gula Merah dibuat dari nira kelapa asli, memiliki rasa manis alami. Cocok untuk minuman tradisional seperti wedang jahe atau kolak."
    },
    {
        id: "7",
        title: "Telur Ayam Kampung",
        image: "",
        description: "Telur ayam kampung organik, kaya nutrisi.",
        price: 35000,
        category: "Telur",
        detail: "Telur Ayam Kampung berasal dari ayam yang dipelihara secara alami, kaya protein dan nutrisi. Cocok untuk lauk atau bahan kue."
    },
    {
        id: "8",
        title: "Telur Ayam Negeri",
        image: "",
        description: "Telur ayam negeri segar, 1 kg isi sekitar 16-18 butir.",
        price: 25000,
        category: "Telur",
        detail: "Telur Ayam Negeri diproduksi dengan standar kebersihan tinggi, segar dan bergizi. Cocok untuk konsumsi sehari-hari."
    },
    {
        id: "9",
        title: "Beras Hitam",
        image: "",
        description: "Beras hitam organik, kaya antioksidan.",
        price: 30000,
        category: "Beras",
        detail: "Beras Hitam Organik mengandung antioksidan tinggi, baik untuk kesehatan jantung dan pencernaan. Cocok untuk menu diet sehat."
    },
    {
        id: "10",
        title: "Minyak Goreng Jagung",
        image: "",
        description: "Minyak goreng jagung, rendah lemak jenuh.",
        price: 28000,
        category: "Minyak",
        detail: "Minyak Goreng Jagung terbuat dari jagung pilihan, rendah lemak jenuh, dan cocok untuk menggoreng dengan hasil gurih dan renyah."
    }
];