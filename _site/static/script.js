document.addEventListener("DOMContentLoaded", function() {
    const numRaindrops = 150;
    const container = document.querySelector(".rain-effect");

    for (let i = 0; i < numRaindrops; i++) {
        createRaindrop();
    }

    function createRaindrop() {
        const raindrop = document.createElement("div");
        raindrop.classList.add("raindrop");
        raindrop.style.left = `${Math.random() * 100}%`;
        raindrop.style.animationDuration = `${Math.random() * 3 + 1}s`;
        container.appendChild(raindrop);
    }
});

// ------------------MASTODON POSTS FETCH SCRIPT --------------------
async function fetchMastodonFeed(instance, username) {
    try {
        // First, try to get the user's ID
        const userResponse = await fetch(`https://${instance}/api/v1/accounts/lookup?acct=${username}`);
        if (!userResponse.ok) throw new Error('Failed to fetch user info');
        const userData = await userResponse.json();
        
        // Then fetch their posts using the ID, excluding replies
        const postsResponse = await fetch(`https://${instance}/api/v1/accounts/${userData.id}/statuses?exclude_replies=true&exclude_reblogs=true&limit=20`);
        if (!postsResponse.ok) throw new Error('Failed to fetch posts');
        
        return await postsResponse.json();
    } catch (error) {
        console.error('Error fetching Mastodon feed:', error);
        return [];
    }
}

function formatDate(dateString) {
    return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
}

function createTootElement(toot) {
    const tootEl = document.createElement('div');
    tootEl.className = 'toot';
    
    // Remove HTML tags from content but keep line breaks
    const content = toot.content
        .replace(/<br\s*\/?>/gi, '\n')
        .replace(/<[^>]+>/g, '');

    const mediaHtml = toot.media_attachments
        .map(function(media) {
            if (media.type === 'image') {
                return `<img src="${media.preview_url}" alt="Media attachment">`;
            }
            return '';
        })
        .join('');

    tootEl.innerHTML = `
        <div class="toot-header">
            <img class="toot-avatar" src="${toot.account.avatar}" alt="${toot.account.display_name}">
            <div>
                <div class="toot-author">${toot.account.display_name}</div>
                <div class="toot-meta">@${toot.account.username} · ${formatDate(toot.created_at)}</div>
            </div>
        </div>
        <div class="toot-content">
            ${content}
            ${mediaHtml}
        </div>
    `;
    
    return tootEl;
}

async function initMastodonFeed(instance, username) {
    const feedContainer = document.getElementById('mastodon-feed');
    const posts = await fetchMastodonFeed(instance, username);
    
    if (Array.isArray(posts) && posts.length > 0) {
        posts.forEach(function(toot) {
            feedContainer.appendChild(createTootElement(toot));
        });
    } else {
        feedContainer.innerHTML = '<p>No posts found or failed to load posts.</p>';
    }
}

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', function() {
    initMastodonFeed("mastodon.social", "twistedhead");
});

