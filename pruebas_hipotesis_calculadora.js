// Calculadora de Pruebas de Hipótesis

document.getElementById('calculadora').innerHTML = `
    <div class="card">
        <h2>🧮 Calculadora de Pruebas de Hipótesis</h2>
        
        <div class="input-group">
            <label>Selecciona el tipo de prueba:</label>
            <select id="tipoPrueba" onchange="cambiarTipoPrueba()">
                <option value="t-una-media">Prueba t - Una Media (σ desconocida)</option>
                <option value="z-una-media">Prueba Z - Una Media (σ conocida)</option>
                <option value="t-dos-medias">Prueba t - Dos Medias Independientes</option>
                <option value="t-pareada">Prueba t - Muestras Pareadas</option>
                <option value="z-proporcion">Prueba Z - Una Proporción</option>
                <option value="z-dos-proporciones">Prueba Z - Dos Proporciones</option>
                <option value="chi-varianza">Prueba χ² - Una Varianza</option>
                <option value="f-varianzas">Prueba F - Dos Varianzas</option>
            </select>
        </div>
        
        <div id="formulario-calculadora"></div>
        <div id="resultado-calculadora"></div>
        <div id="grafico-calculadora"></div>
    </div>
`;

// Funciones auxiliares
function tCritico(alpha, gl, bilateral = true) {
    // Aproximación para valor crítico t
    // En producción, usar una librería estadística
    const z = {
        0.10: bilateral ? 1.645 : 1.282,
        0.05: bilateral ? 1.96 : 1.645,
        0.01: bilateral ? 2.576 : 2.326
    }[alpha] || 1.96;
    
    // Ajuste simple para grados de libertad pequeños
    if (gl < 30) {
        return z * (1 + 1/(4*gl));
    }
    return z;
}

function zCritico(alpha, bilateral = true) {
    const valores = {
        0.10: bilateral ? 1.645 : 1.282,
        0.05: bilateral ? 1.96 : 1.645,
        0.01: bilateral ? 2.576 : 2.326
    };
    return valores[alpha] || 1.96;
}

function chiCritico(alpha, gl, bilateral = true) {
    // Aproximación simple
    if (bilateral) {
        return {
            inferior: Math.max(0, gl - 2 * Math.sqrt(2 * gl)),
            superior: gl + 2 * Math.sqrt(2 * gl)
        };
    }
    return gl + 1.645 * Math.sqrt(2 * gl);
}

function fCritico(alpha, gl1, gl2) {
    // Aproximación muy simplificada
    return 1 + 3 / Math.sqrt(gl2);
}

// Cambiar tipo de prueba
function cambiarTipoPrueba() {
    const tipo = document.getElementById('tipoPrueba').value;
    const formulario = document.getElementById('formulario-calculadora');
    
    switch(tipo) {
        case 't-una-media':
            formulario.innerHTML = formularioTUnaMedia();
            break;
        case 'z-una-media':
            formulario.innerHTML = formularioZUnaMedia();
            break;
        case 't-dos-medias':
            formulario.innerHTML = formularioTDosMedias();
            break;
        case 't-pareada':
            formulario.innerHTML = formularioTPareada();
            break;
        case 'z-proporcion':
            formulario.innerHTML = formularioZProporcion();
            break;
        case 'z-dos-proporciones':
            formulario.innerHTML = formularioZDosProporciones();
            break;
        case 'chi-varianza':
            formulario.innerHTML = formularioChiVarianza();
            break;
        case 'f-varianzas':
            formulario.innerHTML = formularioFVarianzas();
            break;
    }
}

// Formularios
function formularioTUnaMedia() {
    return `
        <div class="calculator-section">
            <h3>Prueba t para Una Media (σ desconocida)</h3>
            
            <div class="input-group">
                <label>Media muestral (x̄):</label>
                <input type="number" id="media" step="any" value="8.2">
            </div>
            
            <div class="input-group">
                <label>Desviación estándar muestral (s):</label>
                <input type="number" id="desv" step="any" value="0.6" min="0">
            </div>
            
            <div class="input-group">
                <label>Tamaño de muestra (n):</label>
                <input type="number" id="n" value="25" min="2">
            </div>
            
            <div class="input-group">
                <label>Valor bajo H₀ (μ₀):</label>
                <input type="number" id="mu0" step="any" value="8.5">
            </div>
            
            <div class="input-group">
                <label>Tipo de prueba:</label>
                <select id="alternativa">
                    <option value="bilateral">Bilateral (μ ≠ μ₀)</option>
                    <option value="mayor">Unilateral Derecha (μ > μ₀)</option>
                    <option value="menor">Unilateral Izquierda (μ < μ₀)</option>
                </select>
            </div>
            
            <div class="input-group">
                <label>Nivel de significancia (α):</label>
                <select id="alpha">
                    <option value="0.10">0.10 (10%)</option>
                    <option value="0.05" selected>0.05 (5%)</option>
                    <option value="0.01">0.01 (1%)</option>
                </select>
            </div>
            
            <button class="btn" onclick="calcularTUnaMedia()">Calcular Prueba</button>
        </div>
    `;
}

function formularioZUnaMedia() {
    return `
        <div class="calculator-section">
            <h3>Prueba Z para Una Media (σ conocida)</h3>
            
            <div class="input-group">
                <label>Media muestral (x̄):</label>
                <input type="number" id="media" step="any" value="8.2">
            </div>
            
            <div class="input-group">
                <label>Desviación estándar poblacional (σ):</label>
                <input type="number" id="sigma" step="any" value="0.6" min="0">
            </div>
            
            <div class="input-group">
                <label>Tamaño de muestra (n):</label>
                <input type="number" id="n" value="40" min="1">
            </div>
            
            <div class="input-group">
                <label>Valor bajo H₀ (μ₀):</label>
                <input type="number" id="mu0" step="any" value="8.5">
            </div>
            
            <div class="input-group">
                <label>Tipo de prueba:</label>
                <select id="alternativa">
                    <option value="bilateral">Bilateral (μ ≠ μ₀)</option>
                    <option value="mayor">Unilateral Derecha (μ > μ₀)</option>
                    <option value="menor">Unilateral Izquierda (μ < μ₀)</option>
                </select>
            </div>
            
            <div class="input-group">
                <label>Nivel de significancia (α):</label>
                <select id="alpha">
                    <option value="0.10">0.10 (10%)</option>
                    <option value="0.05" selected>0.05 (5%)</option>
                    <option value="0.01">0.01 (1%)</option>
                </select>
            </div>
            
            <button class="btn" onclick="calcularZUnaMedia()">Calcular Prueba</button>
        </div>
    `;
}

function formularioTDosMedias() {
    return `
        <div class="calculator-section">
            <h3>Prueba t para Dos Medias Independientes (Welch)</h3>
            
            <h4 style="color: var(--bio-color); margin-top: 20px;">Grupo 1:</h4>
            <div class="input-group">
                <label>Media (x̄₁):</label>
                <input type="number" id="media1" step="any" value="48.5">
            </div>
            <div class="input-group">
                <label>Desviación estándar (s₁):</label>
                <input type="number" id="desv1" step="any" value="3.2" min="0">
            </div>
            <div class="input-group">
                <label>Tamaño de muestra (n₁):</label>
                <input type="number" id="n1" value="20" min="2">
            </div>
            
            <h4 style="color: var(--accent-color); margin-top: 20px;">Grupo 2:</h4>
            <div class="input-group">
                <label>Media (x̄₂):</label>
                <input type="number" id="media2" step="any" value="51.3">
            </div>
            <div class="input-group">
                <label>Desviación estándar (s₂):</label>
                <input type="number" id="desv2" step="any" value="3.8" min="0">
            </div>
            <div class="input-group">
                <label>Tamaño de muestra (n₂):</label>
                <input type="number" id="n2" value="20" min="2">
            </div>
            
            <div class="input-group">
                <label>Tipo de prueba:</label>
                <select id="alternativa">
                    <option value="bilateral">Bilateral (μ₁ ≠ μ₂)</option>
                    <option value="mayor">Unilateral (μ₁ > μ₂)</option>
                    <option value="menor">Unilateral (μ₁ < μ₂)</option>
                </select>
            </div>
            
            <div class="input-group">
                <label>Nivel de significancia (α):</label>
                <select id="alpha">
                    <option value="0.10">0.10 (10%)</option>
                    <option value="0.05" selected>0.05 (5%)</option>
                    <option value="0.01">0.01 (1%)</option>
                </select>
            </div>
            
            <button class="btn" onclick="calcularTDosMedias()">Calcular Prueba</button>
        </div>
    `;
}

function formularioTPareada() {
    return `
        <div class="calculator-section">
            <h3>Prueba t para Muestras Pareadas</h3>
            
            <div class="input-group">
                <label>Media de las diferencias (d̄):</label>
                <input type="number" id="media_diff" step="any" value="3.2">
            </div>
            
            <div class="input-group">
                <label>Desviación estándar de las diferencias (s_d):</label>
                <input type="number" id="desv_diff" step="any" value="1.8" min="0">
            </div>
            
            <div class="input-group">
                <label>Número de pares (n):</label>
                <input type="number" id="n" value="15" min="2">
            </div>
            
            <div class="input-group">
                <label>Valor bajo H₀ (μ_d):</label>
                <input type="number" id="mu0" step="any" value="0">
            </div>
            
            <div class="input-group">
                <label>Tipo de prueba:</label>
                <select id="alternativa">
                    <option value="bilateral">Bilateral (μ_d ≠ 0)</option>
                    <option value="mayor">Unilateral (μ_d > 0)</option>
                    <option value="menor">Unilateral (μ_d < 0)</option>
                </select>
            </div>
            
            <div class="input-group">
                <label>Nivel de significancia (α):</label>
                <select id="alpha">
                    <option value="0.10">0.10 (10%)</option>
                    <option value="0.05" selected>0.05 (5%)</option>
                    <option value="0.01">0.01 (1%)</option>
                </select>
            </div>
            
            <button class="btn" onclick="calcularTPareada()">Calcular Prueba</button>
        </div>
    `;
}

function formularioZProporcion() {
    return `
        <div class="calculator-section">
            <h3>Prueba Z para Una Proporción</h3>
            
            <div class="input-group">
                <label>Número de éxitos (x):</label>
                <input type="number" id="exitos" value="182" min="0">
            </div>
            
            <div class="input-group">
                <label>Tamaño de muestra (n):</label>
                <input type="number" id="n" value="200" min="1">
            </div>
            
            <div class="input-group">
                <label>Proporción bajo H₀ (p₀):</label>
                <input type="number" id="p0" step="0.01" value="0.95" min="0" max="1">
            </div>
            
            <div class="input-group">
                <label>Tipo de prueba:</label>
                <select id="alternativa">
                    <option value="bilateral">Bilateral (p ≠ p₀)</option>
                    <option value="mayor">Unilateral (p > p₀)</option>
                    <option value="menor">Unilateral (p < p₀)</option>
                </select>
            </div>
            
            <div class="input-group">
                <label>Nivel de significancia (α):</label>
                <select id="alpha">
                    <option value="0.10">0.10 (10%)</option>
                    <option value="0.05" selected>0.05 (5%)</option>
                    <option value="0.01">0.01 (1%)</option>
                </select>
            </div>
            
            <button class="btn" onclick="calcularZProporcion()">Calcular Prueba</button>
        </div>
    `;
}

function formularioZDosProporciones() {
    return `
        <div class="calculator-section">
            <h3>Prueba Z para Dos Proporciones</h3>
            
            <h4 style="color: var(--bio-color); margin-top: 20px;">Grupo 1:</h4>
            <div class="input-group">
                <label>Número de éxitos (x₁):</label>
                <input type="number" id="exitos1" value="85" min="0">
            </div>
            <div class="input-group">
                <label>Tamaño de muestra (n₁):</label>
                <input type="number" id="n1" value="100" min="1">
            </div>
            
            <h4 style="color: var(--accent-color); margin-top: 20px;">Grupo 2:</h4>
            <div class="input-group">
                <label>Número de éxitos (x₂):</label>
                <input type="number" id="exitos2" value="78" min="0">
            </div>
            <div class="input-group">
                <label>Tamaño de muestra (n₂):</label>
                <input type="number" id="n2" value="100" min="1">
            </div>
            
            <div class="input-group">
                <label>Tipo de prueba:</label>
                <select id="alternativa">
                    <option value="bilateral">Bilateral (p₁ ≠ p₂)</option>
                    <option value="mayor">Unilateral (p₁ > p₂)</option>
                    <option value="menor">Unilateral (p₁ < p₂)</option>
                </select>
            </div>
            
            <div class="input-group">
                <label>Nivel de significancia (α):</label>
                <select id="alpha">
                    <option value="0.10">0.10 (10%)</option>
                    <option value="0.05" selected>0.05 (5%)</option>
                    <option value="0.01">0.01 (1%)</option>
                </select>
            </div>
            
            <button class="btn" onclick="calcularZDosProporciones()">Calcular Prueba</button>
        </div>
    `;
}

function formularioChiVarianza() {
    return `
        <div class="calculator-section">
            <h3>Prueba χ² para Una Varianza</h3>
            
            <div class="input-group">
                <label>Varianza muestral (s²):</label>
                <input type="number" id="varianza" step="any" value="0.36" min="0">
            </div>
            
            <div class="input-group">
                <label>Tamaño de muestra (n):</label>
                <input type="number" id="n" value="25" min="2">
            </div>
            
            <div class="input-group">
                <label>Varianza bajo H₀ (σ₀²):</label>
                <input type="number" id="sigma2_0" step="any" value="0.25" min="0">
            </div>
            
            <div class="input-group">
                <label>Tipo de prueba:</label>
                <select id="alternativa">
                    <option value="bilateral">Bilateral (σ² ≠ σ₀²)</option>
                    <option value="mayor">Unilateral (σ² > σ₀²)</option>
                    <option value="menor">Unilateral (σ² < σ₀²)</option>
                </select>
            </div>
            
            <div class="input-group">
                <label>Nivel de significancia (α):</label>
                <select id="alpha">
                    <option value="0.10">0.10 (10%)</option>
                    <option value="0.05" selected>0.05 (5%)</option>
                    <option value="0.01">0.01 (1%)</option>
                </select>
            </div>
            
            <button class="btn" onclick="calcularChiVarianza()">Calcular Prueba</button>
        </div>
    `;
}

function formularioFVarianzas() {
    return `
        <div class="calculator-section">
            <h3>Prueba F para Comparar Dos Varianzas</h3>
            
            <h4 style="color: var(--bio-color); margin-top: 20px;">Grupo 1:</h4>
            <div class="input-group">
                <label>Varianza (s₁²):</label>
                <input type="number" id="varianza1" step="any" value="10.24" min="0">
            </div>
            <div class="input-group">
                <label>Tamaño de muestra (n₁):</label>
                <input type="number" id="n1" value="20" min="2">
            </div>
            
            <h4 style="color: var(--accent-color); margin-top: 20px;">Grupo 2:</h4>
            <div class="input-group">
                <label>Varianza (s₂²):</label>
                <input type="number" id="varianza2" step="any" value="14.44" min="0">
            </div>
            <div class="input-group">
                <label>Tamaño de muestra (n₂):</label>
                <input type="number" id="n2" value="20" min="2">
            </div>
            
            <div class="input-group">
                <label>Nivel de significancia (α):</label>
                <select id="alpha">
                    <option value="0.10">0.10 (10%)</option>
                    <option value="0.05" selected>0.05 (5%)</option>
                    <option value="0.01">0.01 (1%)</option>
                </select>
            </div>
            
            <button class="btn" onclick="calcularFVarianzas()">Calcular Prueba</button>
        </div>
    `;
}

// Cálculos
function calcularTUnaMedia() {
    const media = parseFloat(document.getElementById('media').value);
    const desv = parseFloat(document.getElementById('desv').value);
    const n = parseInt(document.getElementById('n').value);
    const mu0 = parseFloat(document.getElementById('mu0').value);
    const alternativa = document.getElementById('alternativa').value;
    const alpha = parseFloat(document.getElementById('alpha').value);
    
    // Calcular estadístico t
    const error_std = desv / Math.sqrt(n);
    const t_calc = (media - mu0) / error_std;
    const gl = n - 1;
    
    // Valores críticos
    const bilateral = alternativa === 'bilateral';
    const alpha_eff = bilateral ? alpha / 2 : alpha;
    const t_crit = tCritico(bilateral ? alpha : alpha * 2, gl, false);
    
    // Decisión
    let rechazar = false;
    if (bilateral) {
        rechazar = Math.abs(t_calc) > t_crit;
    } else if (alternativa === 'mayor') {
        rechazar = t_calc > t_crit;
    } else {
        rechazar = t_calc < -t_crit;
    }
    
    // Mostrar resultados
    mostrarResultadoPrueba('t', t_calc, t_crit, rechazar, bilateral, {
        media, desv, n, mu0, gl, error_std, alpha, alternativa
    });
}

function calcularZUnaMedia() {
    const media = parseFloat(document.getElementById('media').value);
    const sigma = parseFloat(document.getElementById('sigma').value);
    const n = parseInt(document.getElementById('n').value);
    const mu0 = parseFloat(document.getElementById('mu0').value);
    const alternativa = document.getElementById('alternativa').value;
    const alpha = parseFloat(document.getElementById('alpha').value);
    
    // Calcular estadístico Z
    const error_std = sigma / Math.sqrt(n);
    const z_calc = (media - mu0) / error_std;
    
    // Valor crítico
    const bilateral = alternativa === 'bilateral';
    const z_crit = zCritico(alpha, bilateral);
    
    // Decisión
    let rechazar = false;
    if (bilateral) {
        rechazar = Math.abs(z_calc) > z_crit;
    } else if (alternativa === 'mayor') {
        rechazar = z_calc > z_crit;
    } else {
        rechazar = z_calc < -z_crit;
    }
    
    // Mostrar resultados
    mostrarResultadoPrueba('z', z_calc, z_crit, rechazar, bilateral, {
        media, sigma, n, mu0, error_std, alpha, alternativa
    });
}

function calcularTDosMedias() {
    const media1 = parseFloat(document.getElementById('media1').value);
    const desv1 = parseFloat(document.getElementById('desv1').value);
    const n1 = parseInt(document.getElementById('n1').value);
    const media2 = parseFloat(document.getElementById('media2').value);
    const desv2 = parseFloat(document.getElementById('desv2').value);
    const n2 = parseInt(document.getElementById('n2').value);
    const alternativa = document.getElementById('alternativa').value;
    const alpha = parseFloat(document.getElementById('alpha').value);
    
    // Calcular estadístico t (Welch)
    const error_std = Math.sqrt(desv1**2/n1 + desv2**2/n2);
    const t_calc = (media1 - media2) / error_std;
    
    // Grados de libertad (aproximación de Welch)
    const gl = Math.floor(
        (desv1**2/n1 + desv2**2/n2)**2 /
        ((desv1**2/n1)**2/(n1-1) + (desv2**2/n2)**2/(n2-1))
    );
    
    // Valor crítico
    const bilateral = alternativa === 'bilateral';
    const t_crit = tCritico(bilateral ? alpha : alpha * 2, gl, false);
    
    // Decisión
    let rechazar = false;
    if (bilateral) {
        rechazar = Math.abs(t_calc) > t_crit;
    } else if (alternativa === 'mayor') {
        rechazar = t_calc > t_crit;
    } else {
        rechazar = t_calc < -t_crit;
    }
    
    // Mostrar resultados
    mostrarResultadoPrueba('t-dos', t_calc, t_crit, rechazar, bilateral, {
        media1, desv1, n1, media2, desv2, n2, gl, error_std, alpha, alternativa
    });
}

function calcularTPareada() {
    const media_diff = parseFloat(document.getElementById('media_diff').value);
    const desv_diff = parseFloat(document.getElementById('desv_diff').value);
    const n = parseInt(document.getElementById('n').value);
    const mu0 = parseFloat(document.getElementById('mu0').value);
    const alternativa = document.getElementById('alternativa').value;
    const alpha = parseFloat(document.getElementById('alpha').value);
    
    // Calcular estadístico t
    const error_std = desv_diff / Math.sqrt(n);
    const t_calc = (media_diff - mu0) / error_std;
    const gl = n - 1;
    
    // Valor crítico
    const bilateral = alternativa === 'bilateral';
    const t_crit = tCritico(bilateral ? alpha : alpha * 2, gl, false);
    
    // Decisión
    let rechazar = false;
    if (bilateral) {
        rechazar = Math.abs(t_calc) > t_crit;
    } else if (alternativa === 'mayor') {
        rechazar = t_calc > t_crit;
    } else {
        rechazar = t_calc < -t_crit;
    }
    
    // Mostrar resultados
    mostrarResultadoPrueba('t-pareada', t_calc, t_crit, rechazar, bilateral, {
        media_diff, desv_diff, n, mu0, gl, error_std, alpha, alternativa
    });
}

function calcularZProporcion() {
    const exitos = parseInt(document.getElementById('exitos').value);
    const n = parseInt(document.getElementById('n').value);
    const p0 = parseFloat(document.getElementById('p0').value);
    const alternativa = document.getElementById('alternativa').value;
    const alpha = parseFloat(document.getElementById('alpha').value);
    
    const p_hat = exitos / n;
    const error_std = Math.sqrt(p0 * (1 - p0) / n);
    const z_calc = (p_hat - p0) / error_std;
    
    const bilateral = alternativa === 'bilateral';
    const z_crit = zCritico(alpha, bilateral);
    
    let rechazar = false;
    if (bilateral) {
        rechazar = Math.abs(z_calc) > z_crit;
    } else if (alternativa === 'mayor') {
        rechazar = z_calc > z_crit;
    } else {
        rechazar = z_calc < -z_crit;
    }
    
    mostrarResultadoPrueba('z-prop', z_calc, z_crit, rechazar, bilateral, {
        exitos, n, p_hat, p0, error_std, alpha, alternativa
    });
}

function calcularZDosProporciones() {
    const x1 = parseInt(document.getElementById('exitos1').value);
    const n1 = parseInt(document.getElementById('n1').value);
    const x2 = parseInt(document.getElementById('exitos2').value);
    const n2 = parseInt(document.getElementById('n2').value);
    const alternativa = document.getElementById('alternativa').value;
    const alpha = parseFloat(document.getElementById('alpha').value);
    
    const p1 = x1 / n1;
    const p2 = x2 / n2;
    const p_pooled = (x1 + x2) / (n1 + n2);
    const error_std = Math.sqrt(p_pooled * (1 - p_pooled) * (1/n1 + 1/n2));
    const z_calc = (p1 - p2) / error_std;
    
    const bilateral = alternativa === 'bilateral';
    const z_crit = zCritico(alpha, bilateral);
    
    let rechazar = false;
    if (bilateral) {
        rechazar = Math.abs(z_calc) > z_crit;
    } else if (alternativa === 'mayor') {
        rechazar = z_calc > z_crit;
    } else {
        rechazar = z_calc < -z_crit;
    }
    
    mostrarResultadoPrueba('z-dos-prop', z_calc, z_crit, rechazar, bilateral, {
        x1, n1, p1, x2, n2, p2, p_pooled, error_std, alpha, alternativa
    });
}

function calcularChiVarianza() {
    const s2 = parseFloat(document.getElementById('varianza').value);
    const n = parseInt(document.getElementById('n').value);
    const sigma2_0 = parseFloat(document.getElementById('sigma2_0').value);
    const alternativa = document.getElementById('alternativa').value;
    const alpha = parseFloat(document.getElementById('alpha').value);
    
    const gl = n - 1;
    const chi2_calc = (gl * s2) / sigma2_0;
    
    const bilateral = alternativa === 'bilateral';
    const chi2_crit = chiCritico(alpha, gl, bilateral);
    
    let rechazar = false;
    if (bilateral) {
        if (typeof chi2_crit === 'object') {
            rechazar = chi2_calc < chi2_crit.inferior || chi2_calc > chi2_crit.superior;
        }
    } else if (alternativa === 'mayor') {
        rechazar = chi2_calc > chi2_crit;
    } else {
        rechazar = chi2_calc < chi2_crit;
    }
    
    mostrarResultadoPrueba('chi2', chi2_calc, chi2_crit, rechazar, bilateral, {
        s2, n, sigma2_0, gl, alpha, alternativa
    });
}

function calcularFVarianzas() {
    let s1_2 = parseFloat(document.getElementById('varianza1').value);
    const n1 = parseInt(document.getElementById('n1').value);
    let s2_2 = parseFloat(document.getElementById('varianza2').value);
    const n2 = parseInt(document.getElementById('n2').value);
    const alpha = parseFloat(document.getElementById('alpha').value);
    
    // F siempre con la mayor varianza en el numerador
    if (s2_2 > s1_2) {
        [s1_2, s2_2] = [s2_2, s1_2];
    }
    
    const F_calc = s1_2 / s2_2;
    const gl1 = n1 - 1;
    const gl2 = n2 - 1;
    const F_crit = fCritico(alpha, gl1, gl2);
    
    const rechazar = F_calc > F_crit;
    
    mostrarResultadoPrueba('f', F_calc, F_crit, rechazar, false, {
        s1_2, n1, s2_2, n2, gl1, gl2, alpha
    });
}

// Mostrar resultados
function mostrarResultadoPrueba(tipo, estadistico, critico, rechazar, bilateral, datos) {
    const resultado = document.getElementById('resultado-calculadora');
    
    let html = `
        <div class="result-box">
            <h3>Resultados de la Prueba</h3>
            
            <div class="hypothesis-container">
                <div class="hypothesis-box h0">
                    <h4>Hipótesis Nula (H₀)</h4>
                    ${obtenerH0(tipo, datos)}
                </div>
                <div class="hypothesis-box h1">
                    <h4>Hipótesis Alternativa (H₁)</h4>
                    ${obtenerH1(tipo, datos)}
                </div>
            </div>
            
            <div class="result-item">
                <strong>Estadístico calculado:</strong> ${estadistico.toFixed(4)}
            </div>
            
            <div class="result-item">
                <strong>Valor(es) crítico(s):</strong> ${
                    typeof critico === 'object' ? 
                    `${critico.inferior.toFixed(4)} y ${critico.superior.toFixed(4)}` :
                    bilateral ? `±${critico.toFixed(4)}` : critico.toFixed(4)
                }
            </div>
            
            <div class="result-item">
                <strong>Nivel de significancia (α):</strong> ${datos.alpha}
            </div>
            
            ${obtenerEstadisticasAdicionales(tipo, datos)}
            
            <div class="${rechazar ? 'conclusion reject' : 'conclusion'}">
                <strong>Decisión:</strong> ${rechazar ? 'Rechazar H₀' : 'No rechazar H₀'}
                <br><br>
                <strong>Conclusión:</strong> ${obtenerConclusion(tipo, rechazar, datos)}
            </div>
        </div>
    `;
    
    resultado.innerHTML = html;
    
    // Recargar MathJax
    if (typeof MathJax !== 'undefined') {
        MathJax.typesetPromise();
    }
}

function obtenerH0(tipo, datos) {
    switch(tipo) {
        case 't':
        case 'z':
            return `<p>\\(H_0: \\mu = ${datos.mu0}\\)</p>`;
        case 't-dos':
            return `<p>\\(H_0: \\mu_1 = \\mu_2\\)</p>`;
        case 't-pareada':
            return `<p>\\(H_0: \\mu_d = ${datos.mu0}\\)</p>`;
        case 'z-prop':
            return `<p>\\(H_0: p = ${datos.p0}\\)</p>`;
        case 'z-dos-prop':
            return `<p>\\(H_0: p_1 = p_2\\)</p>`;
        case 'chi2':
            return `<p>\\(H_0: \\sigma^2 = ${datos.sigma2_0}\\)</p>`;
        case 'f':
            return `<p>\\(H_0: \\sigma_1^2 = \\sigma_2^2\\)</p>`;
        default:
            return '';
    }
}

function obtenerH1(tipo, datos) {
    const simbolos = {
        'bilateral': '\\neq',
        'mayor': '>',
        'menor': '<'
    };
    const simbolo = simbolos[datos.alternativa] || '\\neq';
    
    switch(tipo) {
        case 't':
        case 'z':
            return `<p>\\(H_1: \\mu ${simbolo} ${datos.mu0}\\)</p>`;
        case 't-dos':
            return `<p>\\(H_1: \\mu_1 ${simbolo} \\mu_2\\)</p>`;
        case 't-pareada':
            return `<p>\\(H_1: \\mu_d ${simbolo} ${datos.mu0}\\)</p>`;
        case 'z-prop':
            return `<p>\\(H_1: p ${simbolo} ${datos.p0}\\)</p>`;
        case 'z-dos-prop':
            return `<p>\\(H_1: p_1 ${simbolo} p_2\\)</p>`;
        case 'chi2':
            return `<p>\\(H_1: \\sigma^2 ${simbolo} ${datos.sigma2_0}\\)</p>`;
        case 'f':
            return `<p>\\(H_1: \\sigma_1^2 \\neq \\sigma_2^2\\)</p>`;
        default:
            return '';
    }
}

function obtenerEstadisticasAdicionales(tipo, datos) {
    switch(tipo) {
        case 't':
        case 'z':
            return `
                <div class="result-item">
                    <strong>Media muestral:</strong> ${datos.media.toFixed(4)}
                </div>
                <div class="result-item">
                    <strong>Error estándar:</strong> ${datos.error_std.toFixed(4)}
                </div>
                ${tipo === 't' ? `<div class="result-item"><strong>Grados de libertad:</strong> ${datos.gl}</div>` : ''}
            `;
        case 't-dos':
            return `
                <div class="result-item">
                    <strong>Media Grupo 1:</strong> ${datos.media1.toFixed(4)}
                </div>
                <div class="result-item">
                    <strong>Media Grupo 2:</strong> ${datos.media2.toFixed(4)}
                </div>
                <div class="result-item">
                    <strong>Diferencia:</strong> ${(datos.media1 - datos.media2).toFixed(4)}
                </div>
                <div class="result-item">
                    <strong>Grados de libertad (Welch):</strong> ${datos.gl}
                </div>
            `;
        case 'z-prop':
            return `
                <div class="result-item">
                    <strong>Proporción muestral:</strong> ${datos.p_hat.toFixed(4)} (${(datos.p_hat * 100).toFixed(2)}%)
                </div>
                <div class="result-item">
                    <strong>Proporción bajo H₀:</strong> ${datos.p0} (${(datos.p0 * 100).toFixed(2)}%)
                </div>
            `;
        case 'z-dos-prop':
            return `
                <div class="result-item">
                    <strong>Proporción Grupo 1:</strong> ${datos.p1.toFixed(4)} (${(datos.p1 * 100).toFixed(2)}%)
                </div>
                <div class="result-item">
                    <strong>Proporción Grupo 2:</strong> ${datos.p2.toFixed(4)} (${(datos.p2 * 100).toFixed(2)}%)
                </div>
                <div class="result-item">
                    <strong>Proporción combinada:</strong> ${datos.p_pooled.toFixed(4)}
                </div>
            `;
        default:
            return '';
    }
}

function obtenerConclusion(tipo, rechazar, datos) {
    if (rechazar) {
        switch(tipo) {
            case 't':
            case 'z':
                return `Con un nivel de significancia de ${datos.alpha}, hay evidencia estadística suficiente para concluir que la media poblacional es diferente de ${datos.mu0}.`;
            case 't-dos':
                return `Con un nivel de significancia de ${datos.alpha}, hay evidencia estadística de que existe diferencia significativa entre las medias de los dos grupos.`;
            case 't-pareada':
                return `Con un nivel de significancia de ${datos.alpha}, hay evidencia de diferencia significativa entre los pares de observaciones.`;
            case 'z-prop':
                return `Con un nivel de significancia de ${datos.alpha}, hay evidencia de que la proporción poblacional es diferente de ${datos.p0}.`;
            case 'z-dos-prop':
                return `Con un nivel de significancia de ${datos.alpha}, hay evidencia de diferencia significativa entre las dos proporciones.`;
            case 'chi2':
                return `Con un nivel de significancia de ${datos.alpha}, hay evidencia de que la varianza poblacional es diferente de ${datos.sigma2_0}.`;
            case 'f':
                return `Con un nivel de significancia de ${datos.alpha}, hay evidencia de que las varianzas de las dos poblaciones son diferentes.`;
            default:
                return 'Rechazamos la hipótesis nula.';
        }
    } else {
        return `Con un nivel de significancia de ${datos.alpha}, NO hay evidencia estadística suficiente para rechazar la hipótesis nula.`;
    }
}

// Inicializar con el primer tipo
cambiarTipoPrueba();

