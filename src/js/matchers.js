export default function sortPC(infoPC) {
    return infoPC.sort((a, b) => b.health - a.health);
}