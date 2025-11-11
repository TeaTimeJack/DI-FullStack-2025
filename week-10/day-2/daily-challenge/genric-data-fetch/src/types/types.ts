
interface CHAMP_INFO{
    attack: number,
    defense: number,
    magic: number,
    difficulty: number
}

interface CHAMP_IMAGE{
    full: string,
    group:string,
    h: number,
    sprite: string,
    w: number,
    x: number,
    y: number
}

interface CHAMP_STATS{
    armor: number
    armorperlevel: number
    attackdamage: number
    attackdamageperlevel:number
    attackrange: number
    attackspeed: number
    attackspeedperlevel: number
    crit:number
    critperlevel:number
    hp: number
    hpperlevel: number
    hpregen:number
    hpregenperlevel: number
    movespeed: number
    mp:number
    mpperlevel:number
    mpregen:number
    mpregenperlevel:number
    spellblock: number
    spellblockperlevel: number
}

export interface API_ITEM{
    blurb: string
    id: string
    image:CHAMP_IMAGE 
    info: CHAMP_INFO
    key: string
    name: string
    partype: string
    stats: CHAMP_STATS
    tags: string[]
    title: string
    version: string
}

