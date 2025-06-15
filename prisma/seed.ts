import { prisma } from "@/prisma";

async function seed(){
    await prisma.user.createMany({
        data: [
            {
                name: "John Frank",
                email: "frank@gmail",

            },
            {
                name: "John Snow",
                email: "snow@gmail",
            },
        ],
    })
}

seed().then(() => {
    console.log("Database seed")
    prisma.$disconnect()
})