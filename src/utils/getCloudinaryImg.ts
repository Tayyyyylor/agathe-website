export function getCloudinaryImage(
    url: string,
    options = 'f_auto,q_auto:best,dpr_auto,w_3000'
) {
    if (!url.includes('/upload/')) return url

    return url.replace('/upload/', `/upload/${options}/`)
}
