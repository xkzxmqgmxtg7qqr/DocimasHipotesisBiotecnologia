// Contenido para las tabs restantes de Pruebas de Hipótesis

// Tab: Dos Poblaciones
document.getElementById('dos-poblaciones').innerHTML = `
    <div class="card">
        <h2>📈 Pruebas para Dos Poblaciones</h2>
        
        <h3>1. Comparación de Dos Medias (Varianzas Conocidas)</h3>
        
        <div class="formula-box">
            <p><strong>Hipótesis:</strong></p>
            <ul style="padding-left: 20px; margin: 10px 0;">
                <li>\\(H_0: \\mu_1 = \\mu_2\\) o \\(H_0: \\mu_1 - \\mu_2 = 0\\)</li>
                <li>\\(H_1: \\mu_1 \\neq \\mu_2\\) (bilateral)</li>
                <li>\\(H_1: \\mu_1 > \\mu_2\\) (unilateral derecha)</li>
                <li>\\(H_1: \\mu_1 < \\mu_2\\) (unilateral izquierda)</li>
            </ul>
            
            <p><strong>Estadístico de prueba:</strong></p>
            \\[Z = \\frac{(\\bar{X}_1 - \\bar{X}_2) - (\\mu_1 - \\mu_2)}{\\sqrt{\\frac{\\sigma_1^2}{n_1} + \\frac{\\sigma_2^2}{n_2}}}\\]
            
            <p style="margin-top: 10px;">Bajo \\(H_0\\): \\(\\mu_1 - \\mu_2 = 0\\), entonces:</p>
            \\[Z = \\frac{\\bar{X}_1 - \\bar{X}_2}{\\sqrt{\\frac{\\sigma_1^2}{n_1} + \\frac{\\sigma_2^2}{n_2}}}\\]
        </div>
        
        <h3>2. Comparación de Dos Medias (Varianzas Desconocidas)</h3>
        
        <h4>Caso 1: Varianzas Iguales (\\(\\sigma_1^2 = \\sigma_2^2\\))</h4>
        
        <div class="formula-box">
            <p><strong>Estadístico de prueba:</strong></p>
            \\[t = \\frac{\\bar{X}_1 - \\bar{X}_2}{s_p\\sqrt{\\frac{1}{n_1} + \\frac{1}{n_2}}}\\]
            
            <p style="margin-top: 10px;"><strong>Varianza combinada:</strong></p>
            \\[s_p^2 = \\frac{(n_1-1)s_1^2 + (n_2-1)s_2^2}{n_1 + n_2 - 2}\\]
            
            <p style="margin-top: 10px;"><strong>Grados de libertad:</strong> \\(gl = n_1 + n_2 - 2\\)</p>
        </div>
        
        <h4>Caso 2: Varianzas Diferentes (Prueba de Welch)</h4>
        
        <div class="formula-box">
            <p><strong>Estadístico de prueba:</strong></p>
            \\[t = \\frac{\\bar{X}_1 - \\bar{X}_2}{\\sqrt{\\frac{s_1^2}{n_1} + \\frac{s_2^2}{n_2}}}\\]
            
            <p style="margin-top: 10px;"><strong>Grados de libertad (aprox. de Welch-Satterthwaite):</strong></p>
            \\[gl = \\frac{\\left(\\frac{s_1^2}{n_1} + \\frac{s_2^2}{n_2}\\right)^2}{\\frac{(s_1^2/n_1)^2}{n_1-1} + \\frac{(s_2^2/n_2)^2}{n_2-1}}\\]
        </div>
        
        <div class="example-box">
            <h4>Ejemplo en Biotecnología:</h4>
            <p>Se desea comparar el crecimiento bacteriano en dos medios de cultivo diferentes. Se realizan 25 cultivos en cada medio:</p>
            
            <table style="margin: 15px 0;">
                <tr>
                    <th>Medio</th>
                    <th>n</th>
                    <th>Media (UFC/mL)</th>
                    <th>Desv. Estándar</th>
                </tr>
                <tr>
                    <td>Medio A</td>
                    <td>25</td>
                    <td>4.2 × 10⁶</td>
                    <td>0.6 × 10⁶</td>
                </tr>
                <tr>
                    <td>Medio B</td>
                    <td>25</td>
                    <td>4.8 × 10⁶</td>
                    <td>0.7 × 10⁶</td>
                </tr>
            </table>
            
            <p>¿Hay diferencia significativa en el crecimiento entre los dos medios? (α = 0.05)</p>
            
            <p style="margin-top: 15px;"><strong>Solución usando prueba de Welch:</strong></p>
            <ol style="padding-left: 20px;">
                <li>\\(H_0: \\mu_A = \\mu_B\\) vs \\(H_1: \\mu_A \\neq \\mu_B\\)</li>
                <li>\\(t = \\frac{4.2 - 4.8}{\\sqrt{0.6^2/25 + 0.7^2/25}} = \\frac{-0.6}{0.186} = -3.23\\)</li>
                <li>\\(gl \\approx 47\\), \\(t_{0.025,47} \\approx 2.01\\)</li>
                <li>Como \\(|-3.23| > 2.01\\), rechazamos \\(H_0\\)</li>
                <li><strong>Conclusión:</strong> Hay evidencia significativa de que el Medio B produce mayor crecimiento bacteriano.</li>
            </ol>
        </div>
        
        <h3>3. Muestras Pareadas (Datos Dependientes)</h3>
        
        <div class="formula-box">
            <p>Se usa cuando las mediciones están naturalmente emparejadas (mismo sujeto, antes-después, etc.)</p>
            
            <p><strong>Diferencias:</strong> \\(d_i = x_{1i} - x_{2i}\\)</p>
            
            <p><strong>Estadístico de prueba:</strong></p>
            \\[t = \\frac{\\bar{d} - \\mu_0}{s_d / \\sqrt{n}}\\]
            
            <p style="margin-top: 10px;">Donde \\(\\bar{d}\\) es la media de las diferencias y \\(s_d\\) es la desviación estándar de las diferencias.</p>
            <p><strong>Grados de libertad:</strong> \\(gl = n - 1\\)</p>
        </div>
        
        <div class="example-box">
            <h4>Ejemplo:</h4>
            <p>Se evalúa la efectividad de un tratamiento midiendo la concentración de una enzima antes y después en 10 pacientes:</p>
            
            <table style="margin: 15px 0;">
                <tr>
                    <th>Paciente</th>
                    <th>Antes</th>
                    <th>Después</th>
                    <th>Diferencia (d)</th>
                </tr>
                <tr><td>1</td><td>45</td><td>38</td><td>7</td></tr>
                <tr><td>2</td><td>52</td><td>44</td><td>8</td></tr>
                <tr><td>3</td><td>48</td><td>42</td><td>6</td></tr>
                <tr><td>...</td><td>...</td><td>...</td><td>...</td></tr>
            </table>
            
            <p>Si \\(\\bar{d} = 6.5\\) y \\(s_d = 2.1\\), ¿el tratamiento reduce la concentración? (α = 0.05)</p>
            
            <p style="margin-top: 15px;"><strong>Solución:</strong></p>
            <ol style="padding-left: 20px;">
                <li>\\(H_0: \\mu_d = 0\\) vs \\(H_1: \\mu_d > 0\\) (unilateral)</li>
                <li>\\(t = \\frac{6.5 - 0}{2.1/\\sqrt{10}} = 9.78\\)</li>
                <li>\\(t_{0.05,9} = 1.833\\)</li>
                <li>Como \\(9.78 > 1.833\\), rechazamos \\(H_0\\)</li>
                <li><strong>Conclusión:</strong> El tratamiento reduce significativamente la concentración de la enzima.</li>
            </ol>
        </div>
        
        <h3>4. Comparación de Dos Proporciones</h3>
        
        <div class="formula-box">
            <p><strong>Hipótesis:</strong></p>
            \\[H_0: p_1 = p_2 \\quad \\text{vs} \\quad H_1: p_1 \\neq p_2\\]
            
            <p><strong>Proporción combinada:</strong></p>
            \\[\\hat{p} = \\frac{x_1 + x_2}{n_1 + n_2}\\]
            
            <p><strong>Estadístico de prueba:</strong></p>
            \\[Z = \\frac{\\hat{p}_1 - \\hat{p}_2}{\\sqrt{\\hat{p}(1-\\hat{p})\\left(\\frac{1}{n_1} + \\frac{1}{n_2}\\right)}}\\]
        </div>
        
        <h3>5. Comparación de Dos Varianzas (Prueba F)</h3>
        
        <div class="formula-box">
            <p><strong>Hipótesis:</strong></p>
            \\[H_0: \\sigma_1^2 = \\sigma_2^2 \\quad \\text{vs} \\quad H_1: \\sigma_1^2 \\neq \\sigma_2^2\\]
            
            <p><strong>Estadístico de prueba:</strong></p>
            \\[F = \\frac{s_1^2}{s_2^2}\\]
            
            <p style="margin-top: 10px;">Donde \\(s_1^2 \\geq s_2^2\\) (siempre colocar la mayor varianza en el numerador)</p>
            <p><strong>Grados de libertad:</strong> \\(gl_1 = n_1 - 1\\), \\(gl_2 = n_2 - 1\\)</p>
            <p><strong>Distribución:</strong> \\(F \\sim F_{gl_1, gl_2}\\)</p>
        </div>
    </div>
`;

// Tab: Ejemplos Biotecnología
document.getElementById('ejemplos-bio').innerHTML = `
    <div class="card">
        <h2>🧬 Ejemplos en Biotecnología</h2>
        
        <h3>Ejemplo 1: Expresión Génica</h3>
        <div class="example-box">
            <h4>Contexto:</h4>
            <p>Se desea evaluar si un tratamiento con un fármaco experimental altera la expresión de un gen específico en células cultivadas. Se miden los niveles de expresión (en unidades arbitrarias) en 30 cultivos tratados y 30 controles.</p>
            
            <p style="margin-top: 15px;"><strong>Datos:</strong></p>
            <ul style="padding-left: 20px;">
                <li>Grupo Control: \\(\\bar{x}_1 = 125.4\\), \\(s_1 = 18.2\\), \\(n_1 = 30\\)</li>
                <li>Grupo Tratado: \\(\\bar{x}_2 = 142.8\\), \\(s_2 = 22.5\\), \\(n_2 = 30\\)</li>
            </ul>
            
            <p style="margin-top: 15px;"><strong>Pregunta:</strong> ¿El tratamiento aumenta la expresión génica? (α = 0.01)</p>
            
            <p style="margin-top: 15px;"><strong>Análisis:</strong></p>
            <ol style="padding-left: 20px;">
                <li><strong>Hipótesis:</strong>
                    <ul style="padding-left: 20px;">
                        <li>\\(H_0: \\mu_1 = \\mu_2\\) (el tratamiento no tiene efecto)</li>
                        <li>\\(H_1: \\mu_2 > \\mu_1\\) (el tratamiento aumenta la expresión)</li>
                    </ul>
                </li>
                <li><strong>Nivel de significancia:</strong> α = 0.01</li>
                <li><strong>Prueba:</strong> t de Welch (varianzas diferentes)
                    \\[t = \\frac{142.8 - 125.4}{\\sqrt{\\frac{22.5^2}{30} + \\frac{18.2^2}{30}}} = \\frac{17.4}{5.23} = 3.33\\]
                </li>
                <li><strong>Grados de libertad:</strong> \\(gl \\approx 55\\)</li>
                <li><strong>Valor crítico:</strong> \\(t_{0.01,55} \\approx 2.40\\)</li>
                <li><strong>Decisión:</strong> Como \\(3.33 > 2.40\\), rechazamos \\(H_0\\)</li>
                <li><strong>Conclusión:</strong> Con un nivel de confianza del 99%, hay evidencia estadística significativa de que el tratamiento experimental aumenta la expresión génica.</li>
            </ol>
            
            <div class="warning-box" style="margin-top: 15px;">
                <h4>Interpretación Biológica:</h4>
                <p>El aumento promedio de 17.4 unidades en la expresión génica es estadísticamente significativo. Esto sugiere que el fármaco podría estar actuando como un activador transcripcional o estabilizando el mRNA del gen analizado.</p>
            </div>
        </div>
        
        <h3>Ejemplo 2: Viabilidad Celular</h3>
        <div class="example-box">
            <h4>Contexto:</h4>
            <p>Una empresa biotecnológica afirma que su nuevo medio de cultivo mantiene una viabilidad celular del 95%. Se evalúan 200 cultivos y se encuentra que 182 mantienen células viables.</p>
            
            <p style="margin-top: 15px;"><strong>Pregunta:</strong> ¿Hay evidencia de que la viabilidad real es diferente del 95%? (α = 0.05)</p>
            
            <p style="margin-top: 15px;"><strong>Análisis:</strong></p>
            <ol style="padding-left: 20px;">
                <li><strong>Hipótesis:</strong>
                    <ul style="padding-left: 20px;">
                        <li>\\(H_0: p = 0.95\\)</li>
                        <li>\\(H_1: p \\neq 0.95\\)</li>
                    </ul>
                </li>
                <li><strong>Proporción muestral:</strong> \\(\\hat{p} = 182/200 = 0.91\\)</li>
                <li><strong>Estadístico Z:</strong>
                    \\[Z = \\frac{0.91 - 0.95}{\\sqrt{\\frac{0.95(0.05)}{200}}} = \\frac{-0.04}{0.0154} = -2.60\\]
                </li>
                <li><strong>Valor crítico:</strong> \\(Z_{0.025} = \\pm 1.96\\)</li>
                <li><strong>Decisión:</strong> Como \\(|-2.60| > 1.96\\), rechazamos \\(H_0\\)</li>
                <li><strong>Conclusión:</strong> Hay evidencia significativa de que la viabilidad real es diferente del 95% afirmado (probablemente menor).</li>
            </ol>
        </div>
        
        <h3>Ejemplo 3: Rendimiento de Fermentación</h3>
        <div class="example-box">
            <h4>Contexto:</h4>
            <p>Se compara el rendimiento de etanol (en g/L) producido por dos cepas de levadura en fermentación. Se realizan 20 fermentaciones con cada cepa.</p>
            
            <table style="margin: 15px 0;">
                <tr>
                    <th>Cepa</th>
                    <th>n</th>
                    <th>Media (g/L)</th>
                    <th>Desv. Est.</th>
                </tr>
                <tr>
                    <td>Cepa A</td>
                    <td>20</td>
                    <td>48.5</td>
                    <td>3.2</td>
                </tr>
                <tr>
                    <td>Cepa B</td>
                    <td>20</td>
                    <td>51.3</td>
                    <td>3.8</td>
                </tr>
            </table>
            
            <p style="margin-top: 15px;"><strong>Pregunta:</strong> ¿La Cepa B produce significativamente más etanol? (α = 0.05)</p>
            
            <p style="margin-top: 15px;"><strong>Análisis:</strong></p>
            <ol style="padding-left: 20px;">
                <li><strong>Hipótesis:</strong>
                    <ul style="padding-left: 20px;">
                        <li>\\(H_0: \\mu_B = \\mu_A\\)</li>
                        <li>\\(H_1: \\mu_B > \\mu_A\\) (unilateral)</li>
                    </ul>
                </li>
                <li><strong>Prueba de Welch:</strong>
                    \\[t = \\frac{51.3 - 48.5}{\\sqrt{\\frac{3.8^2}{20} + \\frac{3.2^2}{20}}} = \\frac{2.8}{1.11} = 2.52\\]
                </li>
                <li><strong>Grados de libertad:</strong> \\(gl \\approx 37\\)</li>
                <li><strong>Valor crítico:</strong> \\(t_{0.05,37} \\approx 1.69\\)</li>
                <li><strong>Valor p:</strong> \\(p \\approx 0.008\\)</li>
                <li><strong>Decisión:</strong> Como \\(2.52 > 1.69\\) y \\(p < 0.05\\), rechazamos \\(H_0\\)</li>
                <li><strong>Conclusión:</strong> La Cepa B produce significativamente más etanol que la Cepa A (diferencia promedio de 2.8 g/L).</li>
            </ol>
            
            <div class="warning-box" style="margin-top: 15px;">
                <h4>Implicaciones Prácticas:</h4>
                <p>Un aumento de 2.8 g/L representa aproximadamente un 5.8% más de rendimiento. En producción industrial, esto podría significar un incremento sustancial en la rentabilidad del proceso de fermentación.</p>
            </div>
        </div>
        
        <h3>Ejemplo 4: Estabilidad de Proteínas</h3>
        <div class="example-box">
            <h4>Contexto:</h4>
            <p>Se evalúa la estabilidad de una proteína recombinante almacenada a -80°C antes y después de 6 meses. Se mide la actividad enzimática (en U/mg) en 15 muestras emparejadas.</p>
            
            <table style="margin: 15px 0;">
                <tr>
                    <th>Muestra</th>
                    <th>Inicial</th>
                    <th>6 meses</th>
                    <th>Diferencia</th>
                </tr>
                <tr><td>1</td><td>125</td><td>122</td><td>3</td></tr>
                <tr><td>2</td><td>132</td><td>128</td><td>4</td></tr>
                <tr><td>3</td><td>118</td><td>116</td><td>2</td></tr>
                <tr><td>...</td><td>...</td><td>...</td><td>...</td></tr>
            </table>
            
            <p>Datos resumidos: \\(\\bar{d} = 3.2\\), \\(s_d = 1.8\\), \\(n = 15\\)</p>
            
            <p style="margin-top: 15px;"><strong>Pregunta:</strong> ¿Hay pérdida significativa de actividad después de 6 meses? (α = 0.05)</p>
            
            <p style="margin-top: 15px;"><strong>Análisis:</strong></p>
            <ol style="padding-left: 20px;">
                <li><strong>Hipótesis:</strong>
                    <ul style="padding-left: 20px;">
                        <li>\\(H_0: \\mu_d = 0\\) (no hay pérdida)</li>
                        <li>\\(H_1: \\mu_d > 0\\) (hay pérdida)</li>
                    </ul>
                </li>
                <li><strong>Prueba t pareada:</strong>
                    \\[t = \\frac{3.2 - 0}{1.8/\\sqrt{15}} = \\frac{3.2}{0.465} = 6.88\\]
                </li>
                <li><strong>Grados de libertad:</strong> \\(gl = 14\\)</li>
                <li><strong>Valor crítico:</strong> \\(t_{0.05,14} = 1.761\\)</li>
                <li><strong>Valor p:</strong> \\(p < 0.001\\)</li>
                <li><strong>Decisión:</strong> Como \\(6.88 > 1.761\\), rechazamos \\(H_0\\)</li>
                <li><strong>Conclusión:</strong> Hay evidencia muy fuerte de pérdida significativa de actividad enzimática después de 6 meses de almacenamiento (pérdida promedio de 3.2 U/mg o aproximadamente 2.6%).</li>
            </ol>
        </div>
    </div>
`;

// Tab: Código R
document.getElementById('codigo-r').innerHTML = `
    <div class="card">
        <h2>📘 Código en R para Pruebas de Hipótesis</h2>
        
        <h3>1. Prueba t para Una Media</h3>
        <pre style="background: #282c34; color: #abb2bf; padding: 20px; border-radius: 10px; overflow-x: auto;"><code># Datos de ejemplo: concentración de proteína (mg/mL)
datos <- c(8.1, 8.3, 7.9, 8.4, 8.2, 8.0, 8.5, 8.1, 8.3, 8.2)

# Prueba bilateral: H0: μ = 8.5 vs H1: μ ≠ 8.5
resultado <- t.test(datos, mu = 8.5, alternative = "two.sided")
print(resultado)

# Prueba unilateral: H0: μ ≥ 8.5 vs H1: μ < 8.5
resultado_izq <- t.test(datos, mu = 8.5, alternative = "less")
print(resultado_izq)

# Extraer componentes
cat("Estadístico t:", resultado$statistic, "\\n")
cat("Valor p:", resultado$p.value, "\\n")
cat("IC 95%:", resultado$conf.int, "\\n")</code></pre>
        
        <h3>2. Prueba t para Dos Medias Independientes</h3>
        <pre style="background: #282c34; color: #abb2bf; padding: 20px; border-radius: 10px; overflow-x: auto;"><code># Datos de dos grupos (ej: crecimiento en dos medios)
medio_a <- c(4.1, 4.3, 4.0, 4.2, 4.5, 4.3, 4.1, 4.4)
medio_b <- c(4.8, 5.0, 4.7, 4.9, 5.1, 4.8, 5.0, 4.9)

# Prueba de Welch (varianzas diferentes) - RECOMENDADO
resultado_welch <- t.test(medio_b, medio_a, 
                          alternative = "two.sided",
                          var.equal = FALSE)
print(resultado_welch)

# Prueba t clásica (asumiendo varianzas iguales)
resultado_clasica <- t.test(medio_b, medio_a,
                            alternative = "two.sided",
                            var.equal = TRUE)
print(resultado_clasica)

# Prueba de varianzas (F-test)
var.test(medio_a, medio_b)</code></pre>
        
        <h3>3. Prueba t Pareada</h3>
        <pre style="background: #282c34; color: #abb2bf; padding: 20px; border-radius: 10px; overflow-x: auto;"><code># Datos pareados (antes y después del tratamiento)
antes <- c(45, 52, 48, 55, 50, 47, 53, 49, 51, 46)
despues <- c(38, 44, 42, 48, 43, 41, 46, 42, 44, 40)

# Prueba t pareada
resultado_pareada <- t.test(antes, despues, 
                            paired = TRUE,
                            alternative = "greater")
print(resultado_pareada)

# Visualización
diferencias <- antes - despues
boxplot(diferencias, main = "Diferencias (Antes - Después)",
        ylab = "Diferencia", col = "lightblue")
abline(h = 0, col = "red", lty = 2)</code></pre>
        
        <h3>4. Prueba para una Proporción</h3>
        <pre style="background: #282c34; color: #abb2bf; padding: 20px; border-radius: 10px; overflow-x: auto;"><code># Prueba de proporción
# Ejemplo: 182 células viables de 200 totales
# H0: p = 0.95

resultado_prop <- prop.test(x = 182,     # éxitos
                            n = 200,      # total
                            p = 0.95,     # valor bajo H0
                            alternative = "two.sided",
                            correct = FALSE)
print(resultado_prop)

# Con corrección de continuidad (más conservador)
resultado_prop_corr <- prop.test(x = 182, n = 200, p = 0.95,
                                 alternative = "two.sided",
                                 correct = TRUE)
print(resultado_prop_corr)</code></pre>
        
        <h3>5. Comparación de Dos Proporciones</h3>
        <pre style="background: #282c34; color: #abb2bf; padding: 20px; border-radius: 10px; overflow-x: auto;"><code># Ejemplo: supervivencia en dos tratamientos
exitos <- c(85, 78)      # supervivientes en cada grupo
totales <- c(100, 100)    # total en cada grupo

resultado_2prop <- prop.test(x = exitos, 
                             n = totales,
                             alternative = "two.sided")
print(resultado_2prop)

# Intervalos de confianza
cat("IC 95% para p1 - p2:", resultado_2prop$conf.int, "\\n")</code></pre>
        
        <h3>6. Prueba Chi-Cuadrado para Varianza</h3>
        <pre style="background: #282c34; color: #abb2bf; padding: 20px; border-radius: 10px; overflow-x: auto;"><code># No hay función directa en R base, pero podemos crear una
prueba_varianza <- function(datos, sigma2_0, alternative = "two.sided") {
    n <- length(datos)
    s2 <- var(datos)
    chi2_obs <- (n - 1) * s2 / sigma2_0
    gl <- n - 1
    
    if (alternative == "two.sided") {
        p_value <- 2 * min(pchisq(chi2_obs, gl),
                           1 - pchisq(chi2_obs, gl))
    } else if (alternative == "greater") {
        p_value <- 1 - pchisq(chi2_obs, gl)
    } else {
        p_value <- pchisq(chi2_obs, gl)
    }
    
    list(statistic = chi2_obs,
         p.value = p_value,
         var.sample = s2)
}

# Ejemplo
datos <- c(8.1, 8.3, 7.9, 8.4, 8.2, 8.0, 8.5, 8.1, 8.3, 8.2)
prueba_varianza(datos, sigma2_0 = 0.04)</code></pre>
        
        <h3>7. Ejemplo Completo con Visualización</h3>
        <pre style="background: #282c34; color: #abb2bf; padding: 20px; border-radius: 10px; overflow-x: auto;"><code># Comparación de rendimiento de dos cepas
set.seed(123)
cepa_a <- rnorm(20, mean = 48.5, sd = 3.2)
cepa_b <- rnorm(20, mean = 51.3, sd = 3.8)

# Crear data frame
datos_completos <- data.frame(
    Rendimiento = c(cepa_a, cepa_b),
    Cepa = rep(c("A", "B"), each = 20)
)

# Estadísticas descriptivas
library(dplyr)
datos_completos %>%
    group_by(Cepa) %>%
    summarise(
        n = n(),
        Media = mean(Rendimiento),
        DE = sd(Rendimiento),
        Min = min(Rendimiento),
        Max = max(Rendimiento)
    )

# Prueba de hipótesis
resultado <- t.test(Rendimiento ~ Cepa, 
                    data = datos_completos,
                    alternative = "two.sided")
print(resultado)

# Visualización
library(ggplot2)
ggplot(datos_completos, aes(x = Cepa, y = Rendimiento, fill = Cepa)) +
    geom_boxplot() +
    geom_jitter(width = 0.2, alpha = 0.5) +
    theme_minimal() +
    labs(title = "Comparación de Rendimiento por Cepa",
         y = "Rendimiento (g/L)",
         x = "Cepa") +
    scale_fill_manual(values = c("#16a085", "#e74c3c"))

# Test de normalidad
shapiro.test(cepa_a)
shapiro.test(cepa_b)

# QQ-plots
par(mfrow = c(1, 2))
qqnorm(cepa_a, main = "Cepa A")
qqline(cepa_a, col = "red")
qqnorm(cepa_b, main = "Cepa B")
qqline(cepa_b, col = "red")</code></pre>
        
        <h3>8. Función Personalizada para Reporte Completo</h3>
        <pre style="background: #282c34; color: #abb2bf; padding: 20px; border-radius: 10px; overflow-x: auto;"><code>reporte_prueba_t <- function(grupo1, grupo2, nombres = c("Grupo 1", "Grupo 2")) {
    cat("═══════════════════════════════════════\\n")
    cat("    REPORTE DE PRUEBA T DE STUDENT\\n")
    cat("═══════════════════════════════════════\\n\\n")
    
    # Estadísticas descriptivas
    cat("ESTADÍSTICAS DESCRIPTIVAS:\\n")
    cat("\\n", nombres[1], ":\\n")
    cat("  n =", length(grupo1), "\\n")
    cat("  Media =", round(mean(grupo1), 3), "\\n")
    cat("  DE =", round(sd(grupo1), 3), "\\n")
    
    cat("\\n", nombres[2], ":\\n")
    cat("  n =", length(grupo2), "\\n")
    cat("  Media =", round(mean(grupo2), 3), "\\n")
    cat("  DE =", round(sd(grupo2), 3), "\\n\\n")
    
    # Prueba de Welch
    resultado <- t.test(grupo2, grupo1)
    
    cat("PRUEBA T DE WELCH:\\n")
    cat("  t =", round(resultado$statistic, 3), "\\n")
    cat("  gl =", round(resultado$parameter, 1), "\\n")
    cat("  p-value =", format.pval(resultado$p.value), "\\n")
    cat("  IC 95%: [", round(resultado$conf.int[1], 3), 
        ",", round(resultado$conf.int[2], 3), "]\\n\\n")
    
    # Conclusión
    cat("CONCLUSIÓN:\\n")
    if (resultado$p.value < 0.01) {
        cat("  *** Diferencia altamente significativa (p < 0.01)\\n")
    } else if (resultado$p.value < 0.05) {
        cat("  ** Diferencia significativa (p < 0.05)\\n")
    } else if (resultado$p.value < 0.10) {
        cat("  * Diferencia marginalmente significativa (p < 0.10)\\n")
    } else {
        cat("  No hay diferencia significativa (p ≥ 0.10)\\n")
    }
    
    cat("═══════════════════════════════════════\\n")
}

# Uso
cepa_a <- rnorm(20, 48.5, 3.2)
cepa_b <- rnorm(20, 51.3, 3.8)
reporte_prueba_t(cepa_a, cepa_b, c("Cepa A", "Cepa B"))</code></pre>
        
        <div class="warning-box" style="margin-top: 20px;">
            <h4>💡 Tips para R:</h4>
            <ul style="padding-left: 20px;">
                <li><strong>Siempre verifica supuestos:</strong> Usa <code>shapiro.test()</code> para normalidad</li>
                <li><strong>Prefiere Welch:</strong> Es más robusto cuando las varianzas son diferentes</li>
                <li><strong>Visualiza:</strong> Los gráficos ayudan a entender los datos</li>
                <li><strong>Reporta IC:</strong> Los intervalos de confianza son más informativos que solo el p-value</li>
                <li><strong>Usa <code>broom::tidy()</code>:</strong> Para obtener resultados en formato data frame</li>
            </ul>
        </div>
    </div>
`;

// Tab: Código Python
document.getElementById('codigo-python').innerHTML = `
    <div class="card">
        <h2>🐍 Código en Python para Pruebas de Hipótesis</h2>
        
        <h3>1. Prueba t para Una Media</h3>
        <pre style="background: #282c34; color: #abb2bf; padding: 20px; border-radius: 10px; overflow-x: auto;"><code>import numpy as np
from scipy import stats

# Datos de ejemplo: concentración de proteína (mg/mL)
datos = np.array([8.1, 8.3, 7.9, 8.4, 8.2, 8.0, 8.5, 8.1, 8.3, 8.2])

# Prueba bilateral: H0: μ = 8.5 vs H1: μ ≠ 8.5
resultado = stats.ttest_1samp(datos, popmean=8.5, alternative='two-sided')

print(f"Estadístico t: {resultado.statistic:.4f}")
print(f"Valor p: {resultado.pvalue:.4f}")

# Intervalo de confianza
n = len(datos)
mean = np.mean(datos)
std_err = stats.sem(datos)
ic = stats.t.interval(0.95, n-1, loc=mean, scale=std_err)
print(f"IC 95%: [{ic[0]:.4f}, {ic[1]:.4f}]")

# Prueba unilateral: H0: μ ≥ 8.5 vs H1: μ < 8.5
resultado_izq = stats.ttest_1samp(datos, popmean=8.5, alternative='less')
print(f"\\nPrueba unilateral izquierda:")
print(f"Valor p: {resultado_izq.pvalue:.4f}")</code></pre>
        
        <h3>2. Prueba t para Dos Medias Independientes</h3>
        <pre style="background: #282c34; color: #abb2bf; padding: 20px; border-radius: 10px; overflow-x: auto;"><code>import numpy as np
from scipy import stats

# Datos de dos grupos (ej: crecimiento en dos medios)
medio_a = np.array([4.1, 4.3, 4.0, 4.2, 4.5, 4.3, 4.1, 4.4])
medio_b = np.array([4.8, 5.0, 4.7, 4.9, 5.1, 4.8, 5.0, 4.9])

# Prueba t de Welch (varianzas diferentes) - RECOMENDADO
resultado_welch = stats.ttest_ind(medio_a, medio_b, 
                                  equal_var=False,
                                  alternative='two-sided')

print("Prueba t de Welch:")
print(f"Estadístico t: {resultado_welch.statistic:.4f}")
print(f"Valor p: {resultado_welch.pvalue:.4f}")

# Prueba t clásica (asumiendo varianzas iguales)
resultado_clasica = stats.ttest_ind(medio_a, medio_b,
                                   equal_var=True,
                                   alternative='two-sided')

print("\\nPrueba t clásica (pooled):")
print(f"Estadístico t: {resultado_clasica.statistic:.4f}")
print(f"Valor p: {resultado_clasica.pvalue:.4f}")

# Estadísticas descriptivas
print(f"\\nMedia Grupo A: {np.mean(medio_a):.4f}")
print(f"Media Grupo B: {np.mean(medio_b):.4f}")
print(f"Diferencia: {np.mean(medio_b) - np.mean(medio_a):.4f}")</code></pre>
        
        <h3>3. Prueba t Pareada</h3>
        <pre style="background: #282c34; color: #abb2bf; padding: 20px; border-radius: 10px; overflow-x: auto;"><code>import numpy as np
from scipy import stats
import matplotlib.pyplot as plt

# Datos pareados (antes y después del tratamiento)
antes = np.array([45, 52, 48, 55, 50, 47, 53, 49, 51, 46])
despues = np.array([38, 44, 42, 48, 43, 41, 46, 42, 44, 40])

# Prueba t pareada
resultado = stats.ttest_rel(antes, despues, alternative='greater')

print("Prueba t pareada:")
print(f"Estadístico t: {resultado.statistic:.4f}")
print(f"Valor p: {resultado.pvalue:.4f}")

# Diferencias
diferencias = antes - despues
print(f"\\nMedia de diferencias: {np.mean(diferencias):.4f}")
print(f"DE de diferencias: {np.std(diferencias, ddof=1):.4f}")

# Visualización
plt.figure(figsize=(10, 5))
plt.subplot(1, 2, 1)
plt.boxplot([antes, despues], labels=['Antes', 'Después'])
plt.ylabel('Valor')
plt.title('Comparación Antes-Después')

plt.subplot(1, 2, 2)
plt.boxplot(diferencias)
plt.ylabel('Diferencia')
plt.title('Diferencias (Antes - Después)')
plt.axhline(y=0, color='r', linestyle='--')
plt.tight_layout()
plt.show()</code></pre>
        
        <h3>4. Prueba Z para una Proporción</h3>
        <pre style="background: #282c34; color: #abb2bf; padding: 20px; border-radius: 10px; overflow-x: auto;"><code>import numpy as np
from statsmodels.stats.proportion import proportions_ztest

# Ejemplo: 182 células viables de 200 totales
# H0: p = 0.95
exitos = 182
n = 200
p0 = 0.95

# Prueba de proporción
z_stat, p_value = proportions_ztest(exitos, n, p0, 
                                    alternative='two-sided')

print("Prueba Z para proporción:")
print(f"Proporción muestral: {exitos/n:.4f}")
print(f"Estadístico Z: {z_stat:.4f}")
print(f"Valor p: {p_value:.4f}")

# Intervalo de confianza
from statsmodels.stats.proportion import proportion_confint
ic_lower, ic_upper = proportion_confint(exitos, n, alpha=0.05, method='normal')
print(f"IC 95%: [{ic_lower:.4f}, {ic_upper:.4f}]")</code></pre>
        
        <h3>5. Comparación de Dos Proporciones</h3>
        <pre style="background: #282c34; color: #abb2bf; padding: 20px; border-radius: 10px; overflow-x: auto;"><code>import numpy as np
from statsmodels.stats.proportion import proportions_ztest

# Ejemplo: supervivencia en dos tratamientos
exitos = np.array([85, 78])    # supervivientes en cada grupo
totales = np.array([100, 100])  # total en cada grupo

# Prueba de dos proporciones
z_stat, p_value = proportions_ztest(exitos, totales, 
                                    alternative='two-sided')

print("Comparación de dos proporciones:")
print(f"Proporción Grupo 1: {exitos[0]/totales[0]:.4f}")
print(f"Proporción Grupo 2: {exitos[1]/totales[1]:.4f}")
print(f"Estadístico Z: {z_stat:.4f}")
print(f"Valor p: {p_value:.4f}")

# Diferencia de proporciones
p1 = exitos[0] / totales[0]
p2 = exitos[1] / totales[1]
print(f"Diferencia: {p1 - p2:.4f}")</code></pre>
        
        <h3>6. Prueba Chi-Cuadrado para Varianza</h3>
        <pre style="background: #282c34; color: #abb2bf; padding: 20px; border-radius: 10px; overflow-x: auto;"><code>import numpy as np
from scipy import stats

def prueba_varianza(datos, sigma2_0, alternative='two-sided'):
    """
    Prueba chi-cuadrado para varianza
    
    Parameters:
    -----------
    datos : array-like
        Datos de la muestra
    sigma2_0 : float
        Varianza bajo H0
    alternative : str
        'two-sided', 'greater', o 'less'
    """
    n = len(datos)
    s2 = np.var(datos, ddof=1)
    chi2_obs = (n - 1) * s2 / sigma2_0
    gl = n - 1
    
    if alternative == 'two-sided':
        p_value = 2 * min(stats.chi2.cdf(chi2_obs, gl),
                          1 - stats.chi2.cdf(chi2_obs, gl))
    elif alternative == 'greater':
        p_value = 1 - stats.chi2.cdf(chi2_obs, gl)
    else:  # less
        p_value = stats.chi2.cdf(chi2_obs, gl)
    
    return {
        'statistic': chi2_obs,
        'p_value': p_value,
        'var_sample': s2,
        'df': gl
    }

# Ejemplo
datos = np.array([8.1, 8.3, 7.9, 8.4, 8.2, 8.0, 8.5, 8.1, 8.3, 8.2])
resultado = prueba_varianza(datos, sigma2_0=0.04)

print("Prueba χ² para varianza:")
print(f"Varianza muestral: {resultado['var_sample']:.6f}")
print(f"Estadístico χ²: {resultado['statistic']:.4f}")
print(f"Valor p: {resultado['p_value']:.4f}")</code></pre>
        
        <h3>7. Prueba F para Comparar Varianzas</h3>
        <pre style="background: #282c34; color: #abb2bf; padding: 20px; border-radius: 10px; overflow-x: auto;"><code>import numpy as np
from scipy import stats

# Datos de dos grupos
grupo1 = np.array([48.5, 47.2, 49.1, 48.8, 47.5, 48.3, 49.0, 48.1])
grupo2 = np.array([51.2, 52.0, 50.8, 51.5, 52.3, 51.0, 50.5, 51.8])

# Calcular varianzas
var1 = np.var(grupo1, ddof=1)
var2 = np.var(grupo2, ddof=1)

# F siempre con la mayor varianza en el numerador
if var2 > var1:
    var1, var2 = var2, var1
    grupo1, grupo2 = grupo2, grupo1

F_stat = var1 / var2
df1 = len(grupo1) - 1
df2 = len(grupo2) - 1

# Valor p (bilateral)
p_value = 2 * min(stats.f.cdf(F_stat, df1, df2),
                  1 - stats.f.cdf(F_stat, df1, df2))

print("Prueba F para varianzas:")
print(f"Varianza 1: {var1:.6f}")
print(f"Varianza 2: {var2:.6f}")
print(f"Estadístico F: {F_stat:.4f}")
print(f"gl: ({df1}, {df2})")
print(f"Valor p: {p_value:.4f}")</code></pre>
        
        <h3>8. Ejemplo Completo con Visualización</h3>
        <pre style="background: #282c34; color: #abb2bf; padding: 20px; border-radius: 10px; overflow-x: auto;"><code>import numpy as np
import pandas as pd
from scipy import stats
import matplotlib.pyplot as plt
import seaborn as sns

# Configuración de estilo
sns.set_style("whitegrid")
plt.rcParams['figure.figsize'] = (12, 6)

# Simular datos de rendimiento de dos cepas
np.random.seed(123)
cepa_a = np.random.normal(48.5, 3.2, 20)
cepa_b = np.random.normal(51.3, 3.8, 20)

# Crear DataFrame
datos = pd.DataFrame({
    'Rendimiento': np.concatenate([cepa_a, cepa_b]),
    'Cepa': ['A']*20 + ['B']*20
})

# Estadísticas descriptivas
print("Estadísticas Descriptivas:")
print(datos.groupby('Cepa')['Rendimiento'].describe())
print()

# Prueba t de Welch
resultado = stats.ttest_ind(cepa_a, cepa_b, equal_var=False)
print("Prueba t de Welch:")
print(f"Estadístico t: {resultado.statistic:.4f}")
print(f"Valor p: {resultado.pvalue:.4f}")

# Test de normalidad (Shapiro-Wilk)
_, p_a = stats.shapiro(cepa_a)
_, p_b = stats.shapiro(cepa_b)
print(f"\\nTest de Normalidad (Shapiro-Wilk):")
print(f"Cepa A - valor p: {p_a:.4f}")
print(f"Cepa B - valor p: {p_b:.4f}")

# Test de Levene (homogeneidad de varianzas)
_, p_levene = stats.levene(cepa_a, cepa_b)
print(f"\\nTest de Levene (homogeneidad):")
print(f"Valor p: {p_levene:.4f}")

# Visualización
fig, axes = plt.subplots(1, 3, figsize=(15, 5))

# Boxplot
sns.boxplot(data=datos, x='Cepa', y='Rendimiento', ax=axes[0])
axes[0].set_title('Comparación de Rendimiento por Cepa')
axes[0].set_ylabel('Rendimiento (g/L)')

# Violin plot
sns.violinplot(data=datos, x='Cepa', y='Rendimiento', ax=axes[1])
axes[1].set_title('Distribución por Cepa')
axes[1].set_ylabel('Rendimiento (g/L)')

# Q-Q plots
from scipy.stats import probplot
probplot(cepa_a, dist="norm", plot=axes[2])
axes[2].set_title('Q-Q Plot Cepa A')

plt.tight_layout()
plt.show()

# Conclusión
if resultado.pvalue < 0.05:
    print("\\n✓ Conclusión: Hay diferencia significativa entre las cepas")
else:
    print("\\n✗ Conclusión: No hay diferencia significativa entre las cepas")</code></pre>
        
        <h3>9. Análisis de Potencia</h3>
        <pre style="background: #282c34; color: #abb2bf; padding: 20px; border-radius: 10px; overflow-x: auto;"><code>from statsmodels.stats.power import ttest_power

# Calcular potencia de la prueba
effect_size = 0.5  # Tamaño del efecto (d de Cohen)
alpha = 0.05
n = 20  # Tamaño de muestra por grupo

potencia = ttest_power(effect_size, n, alpha, alternative='two-sided')
print(f"Potencia de la prueba: {potencia:.4f}")

# Calcular tamaño de muestra necesario para potencia deseada
from statsmodels.stats.power import tt_ind_solve_power

n_necesario = tt_ind_solve_power(effect_size=0.5,
                                 alpha=0.05,
                                 power=0.8,
                                 alternative='two-sided')
print(f"Tamaño de muestra necesario (por grupo): {np.ceil(n_necesario):.0f}")</code></pre>
        
        <div class="warning-box" style="margin-top: 20px;">
            <h4>💡 Tips para Python:</h4>
            <ul style="padding-left: 20px;">
                <li><strong>scipy.stats:</strong> Biblioteca principal para pruebas estadísticas</li>
                <li><strong>statsmodels:</strong> Más completa para análisis avanzados</li>
                <li><strong>Siempre verifica supuestos:</strong> Usa <code>shapiro()</code> y <code>levene()</code></li>
                <li><strong>Visualiza:</strong> matplotlib y seaborn son esenciales</li>
                <li><strong>pandas:</strong> Facilita el manejo de datos</li>
                <li><strong>equal_var=False:</strong> Usa Welch por defecto (más robusto)</li>
            </ul>
        </div>
        
        <h3>10. Instalación de Paquetes</h3>
        <pre style="background: #282c34; color: #abb2bf; padding: 20px; border-radius: 10px; overflow-x: auto;"><code># Instalar paquetes necesarios
pip install numpy scipy pandas matplotlib seaborn statsmodels

# En Jupyter/Colab
!pip install numpy scipy pandas matplotlib seaborn statsmodels</code></pre>
    </div>
`;

// Función para cambiar de tab
function openTab(evt, tabName) {
    var i, tabcontent, tabbuttons;
    
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].classList.remove("active");
    }
    
    tabbuttons = document.getElementsByClassName("tab-button");
    for (i = 0; i < tabbuttons.length; i++) {
        tabbuttons[i].classList.remove("active");
    }
    
    document.getElementById(tabName).classList.add("active");
    evt.currentTarget.classList.add("active");
    
    // Recargar MathJax para la nueva tab
    if (typeof MathJax !== 'undefined') {
        MathJax.typesetPromise();
    }
}

