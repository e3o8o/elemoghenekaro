<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;

/* register.html.twig */
class __TwigTemplate_0a128c55e1e6ffb21cb8cb79719844e82bb16f9c1f91a116b3b767b66cc4e613 extends \Twig\Template
{
    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = [
        ];
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        // line 1
        $this->loadTemplate("register.html.twig", "register.html.twig", 1, "1647280991")->display(twig_array_merge($context, ["title" => "Grav Register Admin User", "classes" => "wide"]));
    }

    public function getTemplateName()
    {
        return "register.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  30 => 1,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Source("", "register.html.twig", "/Users/elemoghenekaro/surreal/preterag-site/grav-cms/user/plugins/admin/themes/grav/templates/register.html.twig");
    }
}


/* register.html.twig */
class __TwigTemplate_0a128c55e1e6ffb21cb8cb79719844e82bb16f9c1f91a116b3b767b66cc4e613___1647280991 extends \Twig\Template
{
    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->blocks = [
            'instructions' => [$this, 'block_instructions'],
            'form' => [$this, 'block_form'],
        ];
    }

    protected function doGetParent(array $context)
    {
        return "partials/register.html.twig";
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $this->parent = $this->loadTemplate("partials/register.html.twig", "register.html.twig", 1);
        $this->parent->display($context, array_merge($this->blocks, $blocks));
    }

    // line 3
    public function block_instructions($context, array $blocks = [])
    {
        // line 4
        echo "    <div class=\"instructions\">
        ";
        // line 5
        echo $this->getAttribute(($context["page"] ?? null), "content", []);
        echo "
    </div>
    ";
    }

    // line 9
    public function block_form($context, array $blocks = [])
    {
        // line 10
        echo "        ";
        $this->loadTemplate("register.html.twig", "register.html.twig", 10, "1912363625")->display(twig_array_merge($context, ["name" => null, "fields" => $this->getAttribute(($context["form"] ?? null), "fields", [])]));
        // line 14
        echo "
        <div class=\"form-actions primary-accent\">

            <button type=\"reset\" class=\"button secondary\"><i class=\"fa fa-exclamation-circle\"></i> ";
        // line 17
        echo twig_escape_filter($this->env, $this->env->getExtension('Grav\Common\Twig\Extension\GravExtension')->translate($this->env, "PLUGIN_ADMIN.LOGIN_BTN_CLEAR"), "html", null, true);
        echo "</button>
            <button type=\"submit\" class=\"button primary\" name=\"task\" value=\"register\"><i class=\"fa fa-sign-in\"></i> ";
        // line 18
        echo twig_escape_filter($this->env, $this->env->getExtension('Grav\Common\Twig\Extension\GravExtension')->translate($this->env, "PLUGIN_ADMIN.LOGIN_BTN_CREATE_USER"), "html", null, true);
        echo "</button>

        </div>

    ";
    }

    public function getTemplateName()
    {
        return "register.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  116 => 18,  112 => 17,  107 => 14,  104 => 10,  101 => 9,  94 => 5,  91 => 4,  88 => 3,  30 => 1,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Source("", "register.html.twig", "/Users/elemoghenekaro/surreal/preterag-site/grav-cms/user/plugins/admin/themes/grav/templates/register.html.twig");
    }
}


/* register.html.twig */
class __TwigTemplate_0a128c55e1e6ffb21cb8cb79719844e82bb16f9c1f91a116b3b767b66cc4e613___1912363625 extends \Twig\Template
{
    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->blocks = [
            'inner_markup_field_open' => [$this, 'block_inner_markup_field_open'],
            'inner_markup_field_close' => [$this, 'block_inner_markup_field_close'],
        ];
    }

    protected function doGetParent(array $context)
    {
        // line 10
        return "forms/default/fields.html.twig";
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $this->parent = $this->loadTemplate("forms/default/fields.html.twig", "register.html.twig", 10);
        $this->parent->display($context, array_merge($this->blocks, $blocks));
    }

    // line 11
    public function block_inner_markup_field_open($context, array $blocks = [])
    {
        echo "<div class=\"wrapper-";
        echo twig_escape_filter($this->env, $this->getAttribute(($context["field"] ?? null), "name", []), "html", null, true);
        echo "\">";
    }

    // line 12
    public function block_inner_markup_field_close($context, array $blocks = [])
    {
        echo "</div>";
    }

    public function getTemplateName()
    {
        return "register.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  188 => 12,  180 => 11,  170 => 10,  116 => 18,  112 => 17,  107 => 14,  104 => 10,  101 => 9,  94 => 5,  91 => 4,  88 => 3,  30 => 1,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Source("", "register.html.twig", "/Users/elemoghenekaro/surreal/preterag-site/grav-cms/user/plugins/admin/themes/grav/templates/register.html.twig");
    }
}
