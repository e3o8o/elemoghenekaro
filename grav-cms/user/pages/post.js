document.addEventListener('DOMContentLoaded', async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const postPath = urlParams.get('file');
    
    if (!postPath) {
        document.querySelector('.post-content').innerHTML = '<p>Error: No post specified</p>';
        return;
    }
    
    const fileExtension = postPath.split('.').pop();
    
    try {
        const response = await fetch(postPath);
        if (!response.ok) throw new Error('Failed to load post');
        const content = await response.text();
        
        let postData;
        
        switch(fileExtension) {
            case 'md':
            case 'mdx':
                // Parse frontmatter and content
                const [, frontmatter, markdown] = content.split('---');
                postData = {
                    ...parseFrontmatter(frontmatter),
                    content: marked.parse(markdown)
                };
                break;
                
            case 'html':
                // Parse HTML metadata and content
                const parser = new DOMParser();
                const doc = parser.parseFromString(content, 'text/html');
                postData = {
                    title: doc.title,
                    author: doc.querySelector('meta[name="author"]')?.content,
                    date: doc.querySelector('meta[name="date"]')?.content,
                    category: doc.querySelector('meta[name="category"]')?.content,
                    readTime: doc.querySelector('meta[name="readTime"]')?.content,
                    content: doc.body.innerHTML
                };
                break;
                
            case 'json':
                postData = JSON.parse(content);
                // Format JSON content
                if (postData.content) {
                    postData.content = formatJSONContent(postData.content);
                }
                break;
                
            case 'yaml':
            case 'yml':
                postData = jsyaml.load(content);
                // Format YAML content
                if (postData.content) {
                    postData.content = formatYAMLContent(postData);
                }
                break;
                
            default:
                throw new Error('Unsupported file format');
        }
        
        // Update the page with post data
        document.title = postData.title + ' - Preterag';
        document.querySelector('.post-title').textContent = postData.title;
        document.querySelector('.post-category').textContent = postData.category;
        document.querySelector('.post-date').textContent = formatDate(postData.date);
        document.querySelector('.post-author').textContent = postData.author;
        document.querySelector('.post-content').innerHTML = postData.content;
        
    } catch (error) {
        console.error('Error loading post:', error);
        document.querySelector('.post-content').innerHTML = '<p>Error loading post. Please try again later.</p>';
    }
});

function parseFrontmatter(frontmatter) {
    const data = {};
    frontmatter.split('\n').forEach(line => {
        const [key, ...value] = line.split(':');
        if (key && value.length) {
            data[key.trim()] = value.join(':').trim().replace(/^"(.*)"$/, '$1');
        }
    });
    return data;
}

function formatDate(dateString) {
    return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

function formatJSONContent(content) {
    if (typeof content === 'string') return content;
    
    let html = '';
    
    // Handle introduction
    if (content.introduction) {
        html += `<p>${content.introduction}</p>`;
    }
    
    // Handle sections
    if (content.sections) {
        content.sections.forEach(section => {
            html += `<h2>${section.title}</h2>`;
            if (section.updates) {
                html += '<ul>';
                section.updates.forEach(update => {
                    html += `<li>${update}</li>`;
                });
                html += '</ul>';
            }
        });
    }
    
    // Handle metrics if present
    if (content.metrics) {
        html += '<h2>Key Metrics</h2>';
        html += '<ul class="metrics-list">';
        for (const [key, value] of Object.entries(content.metrics)) {
            html += `<li><strong>${key.replace(/([A-Z])/g, ' $1').toLowerCase()}:</strong> ${value}</li>`;
        }
        html += '</ul>';
    }
    
    // Handle upcoming items
    if (content.upcoming) {
        html += '<h2>Coming Up Next</h2>';
        html += '<ul>';
        content.upcoming.forEach(item => {
            html += `<li>${item}</li>`;
        });
        html += '</ul>';
    }
    
    // Handle conclusion
    if (content.conclusion) {
        html += `<p>${content.conclusion}</p>`;
    }
    
    return html;
}

function formatYAMLContent(data) {
    let html = '';
    
    // Handle introduction
    if (data.introduction) {
        html += `<p>${data.introduction}</p>`;
    }
    
    // Handle key concepts
    if (data.key_concepts) {
        html += '<section class="key-concepts">';
        data.key_concepts.forEach(concept => {
            html += `
                <div class="concept">
                    <h2>${concept.title}</h2>
                    <p>${concept.description}</p>
                </div>
            `;
        });
        html += '</section>';
    }
    
    // Handle implementation details
    if (data.implementation_details) {
        html += '<section class="implementation">';
        html += '<h2>Implementation Details</h2>';
        
        if (data.implementation_details.consensus_mechanism) {
            const cm = data.implementation_details.consensus_mechanism;
            html += `<h3>${cm.type}</h3>`;
            html += '<ul>';
            cm.features.forEach(feature => {
                html += `<li>${feature}</li>`;
            });
            html += '</ul>';
        }
        
        if (data.implementation_details.smart_contracts) {
            html += '<h3>Smart Contracts</h3>';
            data.implementation_details.smart_contracts.forEach(contract => {
                html += `
                    <div class="contract">
                        <h4>${contract.name}</h4>
                        <p>${contract.purpose}</p>
                        <ul>
                            ${contract.key_functions.map(fn => `<li>${fn}</li>`).join('')}
                        </ul>
                    </div>
                `;
            });
        }
        html += '</section>';
    }
    
    // Handle challenges and solutions
    if (data.challenges_and_solutions) {
        html += '<section class="challenges-solutions">';
        html += '<h2>Challenges and Solutions</h2>';
        
        html += '<div class="challenges">';
        html += '<h3>Challenges</h3>';
        html += '<ul>';
        data.challenges_and_solutions.challenges.forEach(challenge => {
            html += `<li>${challenge}</li>`;
        });
        html += '</ul>';
        html += '</div>';
        
        html += '<div class="solutions">';
        html += '<h3>Solutions</h3>';
        html += '<ul>';
        data.challenges_and_solutions.solutions.forEach(solution => {
            html += `<li>${solution}</li>`;
        });
        html += '</ul>';
        html += '</div>';
        html += '</section>';
    }
    
    // Handle future developments
    if (data.future_developments) {
        html += '<section class="future">';
        html += '<h2>Future Developments</h2>';
        
        html += '<div class="short-term">';
        html += '<h3>Short Term</h3>';
        html += '<ul>';
        data.future_developments.short_term.forEach(item => {
            html += `<li>${item}</li>`;
        });
        html += '</ul>';
        html += '</div>';
        
        html += '<div class="long-term">';
        html += '<h3>Long Term</h3>';
        html += '<ul>';
        data.future_developments.long_term.forEach(item => {
            html += `<li>${item}</li>`;
        });
        html += '</ul>';
        html += '</div>';
        html += '</section>';
    }
    
    // Handle conclusion
    if (data.conclusion) {
        html += `<section class="conclusion"><p>${data.conclusion}</p></section>`;
    }
    
    return html;
} 